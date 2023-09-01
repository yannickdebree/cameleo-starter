import { Cmd } from "@cameleo/cli";

export class CliController {
    @Cmd()
    hello() {
        return 'Hello world'
    }
}