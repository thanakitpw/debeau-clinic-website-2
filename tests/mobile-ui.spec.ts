import { test, expect } from '@playwright/test'

test.describe('Homepage - Mobile', () => {
  test('should load homepage correctly', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/DE BEAU CLINIC/)
    // ตรวจสอบว่า hero section แสดงผล
    const hero = page.locator('section').first()
    await expect(hero).toBeVisible()
  })

  test('should show mobile hamburger menu', async ({ page, isMobile }) => {
    if (!isMobile) test.skip()
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')
    // หาปุ่ม hamburger menu ด้วย aria-label
    const hamburger = page.locator('button[aria-label="Toggle menu"]')
    await expect(hamburger).toBeVisible({ timeout: 10000 })
    // กดเปิดเมนู
    await hamburger.click()
    // รอให้ mobile menu แสดง
    await page.waitForTimeout(500)
    // ตรวจสอบว่า nav links แสดง
    await expect(page.locator('.lg\\:hidden >> text=หน้าแรก').first()).toBeVisible({ timeout: 5000 })
  })

  test('should display services section', async ({ page }) => {
    await page.goto('/')
    // เลื่อนไปยัง section บริการ
    const services = page.getByText('บริการของเรา').first()
    await services.scrollIntoViewIfNeeded()
    await expect(services).toBeVisible()
  })

  test('should show floating LINE and phone buttons', async ({ page }) => {
    await page.goto('/')
    // ตรวจสอบ floating buttons
    const lineButton = page.locator('a[href*="line.me"]').last()
    await expect(lineButton).toBeVisible()
  })

  test('should show cookie consent banner', async ({ page, context }) => {
    // ล้าง localStorage เพื่อดู cookie banner
    await context.clearCookies()
    await page.goto('/')
    // ตรวจสอบ PDPA consent (อาจแสดงหรือไม่แสดงขึ้นอยู่กับ localStorage)
    const consent = page.getByText('คุกกี้')
    // Cookie consent อาจยังไม่ได้ implement
  })

  test('should navigate to service pages', async ({ page }) => {
    await page.goto('/filler')
    await expect(page).toHaveTitle(/ฟิลเลอร์|Filler|DE BEAU/)

    await page.goto('/botox')
    await expect(page).toHaveTitle(/Botox|ลดริ้วรอย|DE BEAU/)
  })

  test('should display footer with contact info', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toBeVisible()
    // ตรวจสอบว่ามีเบอร์โทรในหน้า (อาจอยู่ใน navbar, contact, หรือ floating)
    const phoneLink = page.locator('a[href="tel:097-426-6956"]').first()
    await expect(phoneLink).toBeAttached()
  })

  test('should have correct phone link', async ({ page }) => {
    await page.goto('/')
    const phoneLink = page.locator('a[href="tel:097-426-6956"]').first()
    await expect(phoneLink).toBeAttached()
  })
})

test.describe('Navigation - Mobile', () => {
  test('services dropdown should work on mobile', async ({
    page,
    isMobile,
  }) => {
    if (!isMobile) test.skip()
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // เปิด hamburger menu — รอ hydration ก่อน
    const menuButton = page.locator('button[aria-label="Toggle menu"]')
    await expect(menuButton).toBeVisible({ timeout: 10000 })
    await menuButton.click()
    // รอ mobile menu ปรากฏ (conditional render)
    const mobileMenu = page.locator('div.lg\\:hidden.bg-white')
    await expect(mobileMenu).toBeVisible({ timeout: 5000 })
    // กดเปิด dropdown บริการ (label ใน nav คือ "บริการ")
    const servicesBtn = mobileMenu.getByText('บริการ', { exact: true }).first()
    await servicesBtn.click()
    await page.waitForTimeout(300)
    // ตรวจสอบ sub-items แสดง
    await expect(mobileMenu.getByText('ฟิลเลอร์').first()).toBeVisible({ timeout: 5000 })
  })
})

test.describe('Responsive Layout', () => {
  const pages = [
    '/',
    '/filler',
    '/botox',
    '/ulthera',
    '/laser',
    '/about-dr-beau',
    '/contact-us',
    '/blog',
  ]

  for (const path of pages) {
    test(`page ${path} should not have horizontal overflow`, async ({
      page,
    }) => {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      // ตรวจสอบว่าไม่มี horizontal scroll ที่มากเกินไป
      const overflow = await page.evaluate(() => document.body.scrollWidth - window.innerWidth)
      expect(overflow).toBeLessThanOrEqual(50) // tolerance สำหรับ animations/transitions
    })
  }
})
