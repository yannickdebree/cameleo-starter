import { Command } from "@cameleo/cli";

export class CliController {
    @Command()
    hello() {
        return 'Hello world'
    }
}