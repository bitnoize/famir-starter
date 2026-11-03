import { DIComposer } from '@famir/common'
import {
  CampaignController,
  CampaignService,
  LureController,
  LureService,
  MessageController,
  MessageService,
  ProxyController,
  ProxyService,
  RedirectorController,
  RedirectorService,
  SessionController,
  SessionService,
  SystemController,
  SystemService,
  TargetController,
  TargetService,
} from '@famir/console-app'
//import { CustomController} from './modules/index.js'

export const main: DIComposer = (container) => {
  loadControllers(container)

  buildCommands(container)
}

const loadControllers: DIComposer = (container) => {
  SystemService.register(container)
  SystemController.register(container)

  CampaignService.register(container)
  CampaignController.register(container)

  ProxyService.register(container)
  ProxyController.register(container)

  TargetService.register(container)
  TargetController.register(container)

  RedirectorService.register(container)
  RedirectorController.register(container)

  LureService.register(container)
  LureController.register(container)

  SessionService.register(container)
  SessionController.register(container)

  MessageService.register(container)
  MessageController.register(container)

  // Register custom controllers here...
  //CustomController.register(container)
}

const buildCommands: DIComposer = (container) => {
  SystemController.resolve(container).use()
  CampaignController.resolve(container).use()
  ProxyController.resolve(container).use()
  TargetController.resolve(container).use()
  RedirectorController.resolve(container).use()
  LureController.resolve(container).use()
  SessionController.resolve(container).use()
  MessageController.resolve(container).use()

  // Custom command here...
  //CustomController.resolve(container).use()
}
