import type { Component } from 'vue'
import IconBallAmericanFootball from './icons/IconBallAmericanFootball.vue'
import IconBallBaseball from './icons/IconBallBaseball.vue'
import IconBallBasketball from './icons/IconBallBasketball.vue'
import IconBallFootball from './icons/IconBallFootball.vue'
import IconBallRugby from './icons/IconBallRugby.vue'
import IconBallTennis from './icons/IconBallTennis.vue'
import IconBoxingGlove from './icons/IconBoxingGlove.vue'
import IconDarts from './icons/IconDarts.vue'
import IconFlag from './icons/IconFlag.vue'
import IconGolf from './icons/IconGolf.vue'
import IconHockey from './icons/IconHockey.vue'
import IconMmaA from './icons/IconMmaA.vue'
import IconSteeringWheel from './icons/IconSteeringWheel.vue'
import IconVolleyball from './icons/IconVolleyball.vue'
import IconWaterPolo from './icons/IconWaterPolo.vue'

/** Keys aligned with win-predict-ai `Sport` / `sportIcons`. */
export type SportIconKey =
  | 'football'
  | 'basketball'
  | 'americanFootball'
  | 'hockey'
  | 'baseball'
  | 'motorsport'
  | 'golf'
  | 'politics'
  | 'tennis'
  | 'rugby'
  | 'boxing'
  | 'mma'
  | 'waterPolo'
  | 'volleyball'
  | 'darts'

export const sportIcons: Record<SportIconKey, Component> = {
  football: IconBallFootball,
  basketball: IconBallBasketball,
  americanFootball: IconBallAmericanFootball,
  hockey: IconHockey,
  baseball: IconBallBaseball,
  motorsport: IconSteeringWheel,
  golf: IconGolf,
  politics: IconFlag,
  tennis: IconBallTennis,
  rugby: IconBallRugby,
  boxing: IconBoxingGlove,
  mma: IconMmaA,
  waterPolo: IconWaterPolo,
  volleyball: IconVolleyball,
  darts: IconDarts,
}
