---
title: やりたいことリスト100
date: "2026-08-14"
url: https://yaritai100list.aiandrox.workers.dev/
repo_url: https://github.com/aiandrox/yaritai100list
technologies:
  - Cloudflare Workers
  - Hono
  - TypeScript
---

やりたいこと（バケットリスト）を100個書き出して、達成したらチェックしていくアプリです。

ログインなしでもブラウザ保存で使えます。ログインすると複数リストの作成・URL共有・画像/Markdown 出力ができます。自分が使いたい機能を全部入れました。

Cloudflare Workers + Hono + D1 で動いていて、OGP 画像だけ Deno Deploy 上の Satori で生成しています。web / server / 画像生成で型と Zod スキーマを共有するモノレポ構成です。
