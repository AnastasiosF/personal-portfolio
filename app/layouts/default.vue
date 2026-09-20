<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
    >
      skip to content
    </a>
    <SiteHeader />
    <main id="main" class="mx-auto w-full max-w-3xl flex-1 px-5 py-10 md:py-16">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
