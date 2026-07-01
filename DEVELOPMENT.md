# Income Compass - Development Guide

## Purpose

This document defines the technical architecture and development principles for Income Compass.

Every future feature should follow these guidelines.

---

# Vision

Build a premium mobile-first dividend investing application.

The app should feel like a native iPhone application rather than a website.

---

# Technology Roadmap

Current

- HTML

- CSS

- JavaScript

Target

- React

- Vite

- TypeScript

- Firebase (later)

- Stock Market API

- Dividend API

---

# Project Structure

src/

components/

screens/

services/

hooks/

assets/

styles/

data/

---

# Screens

Home

Portfolio

Dividend Calendar

Analytics

Stock Details

Income AI

Settings

---

# Component Philosophy

Small components.

Reusable components.

No duplicated code.

Every screen should be built from reusable cards.

Example:

Portfolio Card

Dividend Card

Performance Card

Holding Card

Chart Card

---

# Design Principles

Mobile First

Dark Theme

Rounded Corners

Premium Typography

Simple Navigation

Smooth Animations

Large Touch Targets

Consistent Spacing

---

# Color Palette

Background

#0F1115

Card

#181B22

Accent

#7567FF

Success

#55D17A

Warning

#F4B942

Danger

#FF6B6B

Text

#F4F6FB

Secondary Text

#8F96A3

---

# Development Rules

Keep code simple.

Avoid unnecessary complexity.

Build reusable components.

Never sacrifice readability.

One feature at a time.

Commit after every completed feature.

---

# Development Workflow

1. Plan feature

2. Build feature

3. Test feature

4. Commit

5. Deploy automatically via Vercel

---

# Long-Term Goals

Live stock prices

Dividend forecasting

Portfolio import

Broker synchronization

Income AI

Push notifications

Native iPhone app

Native Android app

Widgets

Offline mode
