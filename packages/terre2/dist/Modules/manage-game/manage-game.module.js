"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageGameModule = void 0;
const common_1 = require("@nestjs/common");
const manage_game_service_1 = require("./manage-game.service");
const webgal_fs_module_1 = require("../webgal-fs/webgal-fs.module");
const manage_game_controller_1 = require("./manage-game.controller");
let ManageGameModule = class ManageGameModule {
};
ManageGameModule = __decorate([
    (0, common_1.Module)({
        imports: [webgal_fs_module_1.WebgalFsModule],
        providers: [manage_game_service_1.ManageGameService],
        controllers: [manage_game_controller_1.ManageGameController],
    })
], ManageGameModule);
exports.ManageGameModule = ManageGameModule;
//# sourceMappingURL=manage-game.module.js.map