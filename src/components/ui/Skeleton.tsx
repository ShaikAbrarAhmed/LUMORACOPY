"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "shimmer-sweep bg-slate-200/50 rounded-xl",
        className
      )}
      {...props}
    />
  )
}

/* ─── Team Page Skeletons ────────────────────────────────────── */
export function TeamCardSkeleton() {
  return (
    <div className="bg-background border border-border/80 rounded-[20px] md:rounded-[24px] p-4 md:p-5 flex flex-row sm:flex-col items-start sm:items-stretch justify-start gap-4 sm:space-y-4">
      {/* Circle / Avatar placeholder */}
      <Skeleton className="relative w-20 sm:w-full aspect-[4/5] rounded-xl flex-shrink-0" />
      
      {/* Details placeholder */}
      <div className="flex-1 sm:flex-none space-y-3 w-full">
        <div className="space-y-2">
          {/* Name */}
          <Skeleton className="h-4 w-2/3" />
          {/* Role */}
          <Skeleton className="h-3 w-1/3" />
        </div>
        {/* Description */}
        <div className="space-y-1.5 pt-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </div>
    </div>
  )
}

export function FounderSpotlightSkeleton() {
  return (
    <div className="relative p-[1.5px] rounded-[32px] bg-gradient-to-br from-border via-border to-accent/35">
      <div className="bg-background rounded-[31px] p-4 sm:p-8 lg:p-14">
        {/* Mobile/Tablet Layout (lg:hidden) */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Skeleton className="relative aspect-[4/5] w-20 md:w-28 rounded-xl flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3.5 w-1/3" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-3.5 w-1/4" />
            </div>
          </div>
          <div className="space-y-2 mt-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>

        {/* Desktop Layout (hidden lg:grid) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Skeleton className="relative aspect-[4/5] lg:w-full lg:max-w-[340px] rounded-[24px]" />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-4 w-1/5" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Skeleton className="w-10 h-10 rounded-full" />
              <Skeleton className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CoFounderSkeleton() {
  return (
    <div className="relative rounded-[24px] md:rounded-[28px] border border-slate-200/50 bg-background/65 p-4 sm:p-6 md:p-8 flex flex-row gap-4 items-start h-full">
      <Skeleton className="relative aspect-[4/5] w-20 sm:w-32 rounded-xl md:rounded-2xl flex-shrink-0" />
      <div className="flex-1 space-y-3 text-left">
        <div className="space-y-2">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
        <div className="space-y-1.5 pt-1">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
        <div className="pt-2">
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

/* ─── Cohort Page Skeletons ──────────────────────────────────── */
export function CohortCardSkeleton() {
  return (
    <div className="p-8 rounded-3xl bg-white/40 border border-border/50 backdrop-blur-md space-y-4">
      <Skeleton className="w-10 h-10 rounded-2xl" />
      <Skeleton className="h-5 w-1/3" />
      <div className="space-y-1.5">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-4/5" />
      </div>
    </div>
  )
}

export function CohortCtaSkeleton() {
  return (
    <div className="bg-gradient-to-tr from-primary/10 via-secondary/5 to-accent/5 rounded-[36px] p-10 md:p-20 border border-border/40 flex flex-col items-center text-center space-y-6">
      <Skeleton className="h-10 w-2/3 md:w-1/2" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <Skeleton className="flex-1 h-14 rounded-full" />
        <Skeleton className="h-14 w-full sm:w-36 rounded-full" />
      </div>
    </div>
  )
}

/* ─── Community Page Skeletons ───────────────────────────────── */
export function CommunityCardSkeleton() {
  return (
    <div className="p-4 bg-card/45 backdrop-blur-sm border border-border/40 rounded-2xl flex gap-3">
      <Skeleton className="w-8 h-8 rounded-xl shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3.5 w-1/3" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  )
}

export function CommunityActivitySkeleton() {
  return (
    <div className="w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center relative bg-transparent">
      {/* Central skeleton hub */}
      <div className="absolute w-20 h-20 rounded-full border border-border bg-white flex items-center justify-center shadow-xs">
        <Skeleton className="w-12 h-12 rounded-full animate-pulse" />
      </div>
      {/* Surrounding floating items */}
      <div className="absolute left-[10%] top-[25%] flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full shadow-xs">
        <Skeleton className="w-5 h-5 rounded-full shrink-0" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="absolute right-[10%] top-[35%] flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full shadow-xs">
        <Skeleton className="w-5 h-5 rounded-full shrink-0" />
        <Skeleton className="h-3 w-14" />
      </div>
      <div className="absolute left-[5%] bottom-[30%] flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full shadow-xs">
        <Skeleton className="w-5 h-5 rounded-full shrink-0" />
        <Skeleton className="h-3 w-20" />
      </div>
      <div className="absolute right-[15%] bottom-[20%] flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full shadow-xs">
        <Skeleton className="w-5 h-5 rounded-full shrink-0" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="absolute left-[40%] top-[5%] flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-full shadow-xs">
        <Skeleton className="w-5 h-5 rounded-full shrink-0" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  )
}

/* ─── Auth Form Skeletons ────────────────────────────────────── */
export function AuthFormSkeleton() {
  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <Skeleton className="h-10 w-1/2 mx-auto" />
        <Skeleton className="h-5 w-2/3 mx-auto" />
      </div>
      <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-border/50 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/5" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
        <Skeleton className="h-14 w-full rounded-xl" />
      </div>
    </div>
  )
}

/* ─── Future Dashboard Component Skeletons ───────────────────── */
export function DashboardSkeleton() {
  return (
    <div className="w-full min-h-[500px] flex bg-slate-50 border border-border/50 rounded-3xl overflow-hidden shadow-sm">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-white p-6 space-y-6 hidden md:block">
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-xl" />
          <Skeleton className="h-5 w-24" />
        </div>
        <div className="space-y-3 pt-6">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </div>
      </div>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-16 border-b border-border bg-white px-6 flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <div className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        {/* Dashboard Grid */}
        <div className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-border rounded-2xl space-y-3">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-8 w-1/3" />
            </div>
            <div className="p-6 bg-white border border-border rounded-2xl space-y-3">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-8 w-1/3" />
            </div>
            <div className="p-6 bg-white border border-border rounded-2xl space-y-3">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-8 w-1/3" />
            </div>
          </div>
          {/* Main Chart/Table area */}
          <div className="bg-white border border-border rounded-2xl p-6 space-y-4">
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
