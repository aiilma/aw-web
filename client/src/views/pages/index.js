import React from 'react'

export {default as HomeContainer} from './Home/HomeContainer'
export const CompList = React.lazy(() => import('./CompList/Container'));
export {default as Showcase} from './Showcase/ShowcaseContainer'
export const SuggestForm = React.lazy(() => import('./SuggestForm/Container'));
export {default as SuggestFormSucceed} from './SuggestForm/Succeed'

export {default as ErrorPage} from './ErrorPage/ErrorPage'