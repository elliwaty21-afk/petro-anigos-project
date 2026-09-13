"use client"

import Image from "next/image"
import Link from "next/link"
import { Languages, Menu } from "lucide-react"

import { navigationItems, type NavigationItem } from "@/components/navigation-config"
import { useLocale } from "@/components/locale-provider"
import { localeLabels, translate, type TranslationKey } from "@/lib/i18n"
import { buttonVariants, Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function DesktopNavigation() {
  const { locale } = useLocale()
  const navigationLabels: Record<string, TranslationKey> = {
    Beranda: "home",
    "Tentang Kami": "about",
    Produk: "products",
    Jangkauan: "reach",
    Artikel: "articles",
    Keberlanjutan: "sustainability",
  }
  const childLabels: Record<string, TranslationKey> = {
    "Profil Perusahaan": "companyProfile",
    "Harapan & Cita-Cita": "hopes",
    "Struktur Perusahaan": "structure",
    Kemitraan: "partnership",
    Legalitas: "legality",
    "Kenali Produk": "productsOverview",
    Penawaran: "offer",
    Armada: "fleet",
    "Anigos News": "news",
    Publikasi: "publications",
    "Landasan Informasi Publik": "publicInformation",
    "Energi Berkelanjutan": "sustainableEnergy",
    "Keselamatan Operasional": "safety",
    "Kemitraan & Tata Kelola": "governance",
    "Pencapaian Perusahaan": "achievements",
  }

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="text-background hover:bg-background/10 hover:text-background data-popup-open:bg-background/10">
                  {translate(locale, navigationLabels[item.label] ?? "home")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[420px] gap-1 p-2">
                    <div className="grid gap-1">
                      {item.children.map((child) => (
                        <NavigationMenuLink
                          key={child.href}
                          href={child.href}
                          className="flex-col items-start"
                        >
                          <span className="font-medium">
                            {translate(locale, childLabels[child.label] ?? "home")}
                          </span>
                          {child.description ? (
                            <span className="text-xs text-muted-foreground">
                              {child.description}
                            </span>
                          ) : null}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={item.href}
                className="text-background hover:bg-background/10 hover:text-background"
              >
                {translate(locale, navigationLabels[item.label] ?? "home")}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNavigationItem({
  item,
  onNavigate,
  locale,
}: {
  item: NavigationItem
  onNavigate: () => void
  locale: "id" | "en"
}) {
  const navigationLabels: Record<string, TranslationKey> = {
    Beranda: "home",
    "Tentang Kami": "about",
    Produk: "products",
    Jangkauan: "reach",
    Artikel: "articles",
    Keberlanjutan: "sustainability",
  }
  const childLabels: Record<string, TranslationKey> = {
    "Profil Perusahaan": "companyProfile",
    "Harapan & Cita-Cita": "hopes",
    "Struktur Perusahaan": "structure",
    Kemitraan: "partnership",
    Legalitas: "legality",
    "Kenali Produk": "productsOverview",
    Penawaran: "offer",
    Armada: "fleet",
    "Anigos News": "news",
    Publikasi: "publications",
    "Landasan Informasi Publik": "publicInformation",
    "Energi Berkelanjutan": "sustainableEnergy",
    "Keselamatan Operasional": "safety",
    "Kemitraan & Tata Kelola": "governance",
    "Pencapaian Perusahaan": "achievements",
  }

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-muted"
        onClick={onNavigate}
      >
        {translate(locale, navigationLabels[item.label] ?? "home")}
      </Link>
    )
  }

  return (
    <div className="rounded-2xl border border-border p-2">
      <p className="px-3 py-2 text-sm font-semibold">
        {translate(locale, navigationLabels[item.label] ?? "home")}
      </p>
      <div className="grid gap-1">
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={onNavigate}
          >
            {translate(locale, childLabels[child.label] ?? "home")}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function Header() {
  const { locale, setLocale } = useLocale()
  const content = {
    contact: translate(locale, "contact"),
    language: translate(locale, "language"),
    mobileMenu: translate(locale, "mobileMenu"),
    mobileDescription: translate(locale, "mobileDescription"),
  }

  return (
    <header className="sticky top-0 z-50 border-b border-background/10 bg-foreground text-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
        >
          <Image
            src="/logo/petro%20anigos%20white.svg"
            alt="Petro Anigos"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">Petro Anigos</span>
        </Link>

        <DesktopNavigation />

        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} setLocale={setLocale} label={content.language} />
            <Link
              href="/produk/penawaran"
              className={buttonVariants({
                className: "bg-background text-foreground hover:bg-background/90",
              })}
            >
              {content.contact}
            </Link>
          </div>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:bg-background/10 hover:text-background md:hidden"
                aria-label="Buka menu navigasi"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(22rem,90vw)]">
            <SheetHeader>
              <SheetTitle>{content.mobileMenu}</SheetTitle>
              <SheetDescription>
                {content.mobileDescription}
              </SheetDescription>
            </SheetHeader>
            <nav
              className="flex flex-col gap-2 overflow-y-auto px-6 pb-6"
              aria-label="Navigasi mobile"
            >
              {navigationItems.map((item) => (
                <MobileNavigationItem
                  key={item.href}
                  item={item}
                  locale={locale}
                  onNavigate={() => undefined}
                />
              ))}
              <Link
                href="/produk/penawaran"
                className={buttonVariants({ className: "mt-3 w-full" })}
              >
                {content.contact}
              </Link>
              <LanguageSwitcher locale={locale} setLocale={setLocale} label={content.language} />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function LanguageSwitcher({
  locale,
  setLocale,
  label,
}: {
  locale: "id" | "en"
  setLocale: (locale: "id" | "en") => void
  label: string
}) {
  const nextLocale = locale === "id" ? "en" : "id"

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
      className="inline-flex h-9 items-center gap-1.5 rounded-4xl border border-background/20 px-3 text-xs font-semibold text-background transition-colors hover:bg-background/10"
      aria-label={`${label}: ${localeLabels[nextLocale]}`}
      title={`${label}: ${localeLabels[nextLocale]}`}
    >
      <Languages className="size-3.5" />
      <span>{localeLabels[locale]}</span>
      <span className="text-background/45">/</span>
      <span className="text-background/60">{localeLabels[nextLocale]}</span>
    </button>
  )
}
