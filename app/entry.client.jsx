import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import { install as installSW } from '@layer0/prefetch/window'

hydrate(<RemixBrowser />, document)

installSW()
