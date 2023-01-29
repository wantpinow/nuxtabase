# Nuxtabase

[Nuxt](https://nuxt.com) + [Supabase](https://supabase.com) + [Tailwind](https://tailwindcss.com) starter template.

## Setup

Install all required packages:

```bash
yarn install
```

## Local Development

Start the local Supabase project. Make sure [Docker](https://www.docker.com/products/docker-desktop/) is running.

```bash
yarn supabase start
```

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production Development

If you wish to use a hosted Supabase instance, include a `.env` file in the root of the project with the following variables:

```
SUPABASE_URL={SUPABASE_URL}
SUPABASE_KEY={SUPABASE_KEY}
SUPABASE_SERVICE_KEY={SUPABASE_SERVICE_KEY}
```

## Usage

### Errors

We include a `useError` composable that serves as a temporary list of error messages that can be displayed to the client. Each error has a message, type and timeout after which it will be removed from the list. We also give a simple panel to display these errors in order (`components/errors/Errors.vue`).

An error can be added from any component using the `addError` function within the `useError` composable.

### User Authentication and Authorization

We use [Supabase](https://supabase.com) to take care of authentication. The app contains a working registration and login form, as well as user persistence across the app with the help of [@nuxtjs/supabase](https://supabase.nuxtjs.org/). This provides an easily accessible `useSupabaseUser` composable that is available across the app. It also provides a `useSupabaseClient` composable to perform CRUD operations on tables, listen to table changes, interact with Supabase storage, and call Postgres functions via RPC.

Additionally, we make use of the [supabase-custom-claims](https://github.com/supabase-community/supabase-custom-claims) set of SQL commands to manage user claims for authorization. This gives us the ability to add keys and values to the `raw_app_metadata` column found in the `auth.users` table in Supabase. `raw_app_metadata` is intended for user attributes that only admins are able to change (such as a user's role).

Route-level authorization is performed in the `middleware/auth.global` middleware file. We include a common use case of only allowing claims admins (created and managed using custom claims) to visit pages with the `/admin` prefix.

The following example users are provided in the `supabase/seed.sql` file and will be automatically loaded when the local Supabase instance is started with `supabase start`:

```
# admin user
email:    admin@test.com
password: test1234

# standard user
email:    user@test.com
password: test1234
```

You will see that, once logged in, the admin user can access the `admin/users` route, whereas the standard user cannot.
