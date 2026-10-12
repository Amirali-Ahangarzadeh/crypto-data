# Crypto Data | داده های ارزهای دیجیتال

**Project name:** `crypto-data`

A React + Vite application that fetches cryptocurrency data from an API and displays it in an interactive table. Users can search for coins, switch the displayed currency, navigate between pages, and open a modal to view a one-day chart.

پروژه `crypto-data` یک برنامه ساخته شده با React و Vite است که اطلاعات ارزهای دیجیتال را از طریق API دریافت می کند و در یک جدول تعاملی نمایش می دهد. کاربران می توانند ارزها را جست وجو کنند، واحد پول نمایش اطلاعات را تغییر دهند، بین صفحات جابه جا شوند و با انتخاب هر ارز، نمودار یک روزه آن را در یک مودال مشاهده کنند.

---

## Features | امکانات

### English
- Fetch cryptocurrency market data from an API.
- Display cryptocurrency information in a table.
- Search for cryptocurrencies by name.
- Switch the displayed currency between **USD**, **EUR**, and **JPY**.
- Select a coin to open its details in a modal.
- View a one-day chart and switch between:
  - Price
  - Market Capitalization
  - Total Volume
- Navigate through results using pagination.
- Built with React and Vite.

### فارسی
- دریافت اطلاعات بازار ارزهای دیجیتال از طریق API.
- نمایش اطلاعات ارزها در قالب جدول.
- جست وجوی ارزهای دیجیتال بر اساس نام.
- تغییر واحد پول بین **دلار آمریکا (USD)**، **یورو (EUR)** و **ین ژاپن (JPY)**.
- باز کردن مودال جزئیات با انتخاب هر ارز.
- نمایش نمودار یک روزه و امکان انتخاب بین شاخص های زیر:
  - قیمت (Price)
  - ارزش بازار (Market Cap)
  - حجم کل معاملات (Total Volume)
- جابه جایی بین صفحات با صفحه بندی (Pagination).
- توسعه یافته با React و Vite.

---

## Requirements | پیش نیازها

Before running the project, install:

1. **Node.js** — download it from the official website: https://nodejs.org/
2. **npm** — npm is included with Node.js, so you do not need to install it separately.

پیش از اجرای پروژه، موارد زیر را نصب کنید:

1. **Node.js** — آن را از وب سایت رسمی دریافت و نصب کنید: https://nodejs.org/
2. **npm** — این ابزار همراه Node.js نصب می شود و نیازی به نصب جداگانه آن نیست.

After installing Node.js, close and reopen your terminal, then verify the installation:

```bash
node -v
npm -v
```

پس از نصب Node.js، ترمینال را ببندید و دوباره باز کنید و برای اطمینان از نصب، دستورهای زیر را اجرا کنید:

```bash
node -v
npm -v
```

## Getting Started | راه اندازی پروژه

### 1. Open the project folder | ورود به پوشه پروژه

Download the `crypto-data` project and open a terminal in its root directory — the directory containing `package.json`.

پروژه `crypto-data` را دریافت کنید و ترمینال را در پوشه اصلی آن باز کنید؛ همان پوشه ای که فایل `package.json` در آن قرار دارد.

### 2. Install dependencies | نصب وابستگی ها

Run this command once from the project directory:

```bash
npm install
```

This installs the dependencies required by the project.

این دستور وابستگی های مورد نیاز پروژه را نصب می کند. کافی است آن را در پوشه اصلی پروژه اجرا کنید.

### 3. Start the development server | اجرای پروژه

```bash
npm run dev
```

Vite displays a local URL in the terminal. Open that URL in your browser to use the application. The address is commonly similar to `http://localhost:5173/`, but use the exact address shown in your terminal.

پس از اجرای دستور، Vite یک آدرس محلی در ترمینال نمایش می دهد. آن آدرس را در مرورگر باز کنید. این آدرس معمولاً شبیه `http://localhost:5173/` است؛ با این حال، آدرس دقیق نمایش داده شده در ترمینال را وارد کنید.

---

## Troubleshooting | رفع مشکلات رایج

- **`node` or `npm` is not recognized:** Install Node.js from https://nodejs.org/ and reopen the terminal.
- **Dependencies are missing:** Run `npm install` in the project root.
- **The development server does not start:** Make sure the terminal is in the directory containing `package.json` and that the `dev` script exists.
- **API data does not load:** Check your internet connection, the browser console, and whether the API is available.

- **دستور `node` یا `npm` شناخته نمی شود:** Node.js را از https://nodejs.org/ نصب کنید و ترمینال را دوباره باز کنید.
- **وابستگی ها نصب نیستند:** دستور `npm install` را در پوشه اصلی پروژه اجرا کنید.
- **سرور توسعه اجرا نمی شود:** بررسی کنید ترمینال در پوشه حاوی `package.json` باشد و اسکریپت `dev` در آن تعریف شده باشد.
- **اطلاعات API بارگذاری نمی شود:** اتصال اینترنت، کنسول مرورگر و در دسترس بودن API را بررسی کنید.

---
