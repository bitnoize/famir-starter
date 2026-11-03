import { DIComposer } from '@famir/common'
import {
  AuthorizeController,
  AuthorizeService,
  CompleteController,
  CompleteService,
  ForwardController,
  ForwardService,
  SetupMirrorController,
  SetupMirrorService,
  TransformController,
  WellKnownUrlsController,
} from '@famir/reverse-app'
//import { CustomController } from './modules/index.js'

export const main: DIComposer = (container) => {
  loadControllers(container)

  buildMiddlewareChain(container)
}

const loadControllers: DIComposer = (container) => {
  SetupMirrorService.register(container)
  SetupMirrorController.register(container)

  WellKnownUrlsController.register(container)

  AuthorizeService.register(container)
  AuthorizeController.register(container)

  TransformController.register(container)

  ForwardService.register(container)
  ForwardController.register(container)

  CompleteService.register(container)
  CompleteController.register(container)

  // Register custom controllers here...
  //CustomController.register(container)
}

const buildMiddlewareChain: DIComposer = (container) => {
  SetupMirrorController.resolve(container).use()

  // Custom -pre middleware here...
  //CustomController.resolve(container).pre()

  WellKnownUrlsController.resolve(container).use()
  AuthorizeController.resolve(container).use()
  TransformController.resolve(container).use()

  // Custom -act middleware here...
  //CustomController.resolve(container).act()

  ForwardController.resolve(container).use()
  CompleteController.resolve(container).use()
}
