// TODO:W remove this, along with `@types/next`, as soon as typescript support will come out of the box, in new version
// (next to 8.1.0):
// https://github.com/zeit/next.js/pull/7169

declare module 'next/router' {
  import { RouterProps } from 'next-server/router'
  export function useRouter(): RouterProps
  export * from 'next-server/router'
}
