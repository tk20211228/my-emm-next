# 環境構築

下記のとおりに環境構築

## Next.js 環境構築

```bash
nvm install 20
npm install -g pnpm
pnpm create next-app
cd my-emm-next
pnpm dev

```

## Supabase 環境構築

事前に Docker を起動しておいた状態で実施する
[Docker のインストール方法](https://docs.docker.com/desktop/install/mac-install/)

```bash
pnpm dlx supabase init
pnpm dlx supabase start
pnpm dlx supabase status

```

### スクリプトの追加

コマンドで型定義するスクリプト。package.json > scripts に以下追記する。

```json
"supabase:generate-types": "bunx supabase gen types typescript --local --schema public > types/database.ts",
"supabase:generate-migration": "bunx supabase db diff | bunx supabase migration new",
"supabase:generate-seed": "bunx supabase db dump --data-only -f supabase/seed.sql",
```

### 環境変数の設定

```.env.local
NEXT_PUBLIC_SUPABASE_URL=xxx # API URLの内容
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx #anon key の内容
SUPABASE_SERVICE_ROLE_KEY=xxx # service_role key の内容
```

### SDK インストール

```ターミナル
pnpm add @supabase/supabase-js @supabase/ssr
```

## shadcn/ui 環境構築

```bash
pnpm dlx shadcn@latest init

```

## プロジェクトのエイリアス作成

```zsh
code ~/.zshrc

```

以下を”~/.zshrc”に追加

```~/.zshrc
alias myemm='cd ~/documents/nino+/my-emm-next'
```

```ターミナル
source ~/.zshrc
```

## 作業効率のノウハウ

### ショートカット

#### [Mac 用ショートカット一覧](https://docs.google.com/spreadsheets/d/1zKk4zaU1L6mmGpnip2eSw88ZPL3Mfc0fDPCmJalTmEk/edit?usp=sharing)

### 拡張機能

- [File Util]  
  [使い方]  
  1.コマンドパレッドを開く。  
  2.File Util > Project Root
- [easy-simple-react-snippets-lite]  
  ・rfc -> components  
  ・rst -> useState  
  ・rctx -> context,provider
- [incrementSelection]  
   連番を入力する
- [javaScript(ES6) code snippets]

  ```tsx
  crg;
  と入力し補完する;
  console.log(object);
  と入力できる;
  ```

- [Paste Image]
  1. shift + command + 4 で　カーソルで範囲指定した範囲をし、`control` を　押下しながらマウスのクリックを話す
  2. .md ファイルで`option` + `command` + `v`のショートカットを入力すると
  3. 以下が自動入力され、root プロジェクトに　コピーした画像が格納される  
     `![](yyyy-mm-dd.png)`

### コーディングテクニック

- コンポーネント

  ```tsx
  Header/ でtabキーを押すと、<Header />
  ```

- 不要な import を削除
  1. フォルダを選択
  2. 右クリック
  3. 「Organize imports in Folder」
- emmet

  ```tsx
  ul>li で補完すると
      <ul>
        <li></li>
      </ul>
  となる
  ```

  ```tsx
  lorem
  と入力し補完すると

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
  perferendis quas quaerat eius quod deserunt quidem, alias animi vitae
  unde perspiciatis recusandae cum, totam officia provident maxime a
  eveniet. Autem?

  とダミーの文字列が入力される

  lorem4
  と入力し補完すると

  Lorem ipsum dolor sit.

  と4つの単語で並べる
  ```

-
-
-
-
