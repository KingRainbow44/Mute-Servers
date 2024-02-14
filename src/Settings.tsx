import React from "react";

import { common, webpack } from "replugged";
import { toast } from "replugged/common";
import { Button, Flex } from "replugged/components";
import { AuthenticationStore as AuthStore } from "./types";

export const AuthenticationStore = webpack.getByProps<AuthStore>("getToken", "getLoginStatus");

function muteServers(): void {
    const guildIds: string[] = [];
    for (const guild in common.guilds.getGuilds()) {
        guildIds.push(guild);
    }

    if (!AuthenticationStore) {
        toast.toast("No authentication store found!");
        return;
    }

    const token = AuthenticationStore.getToken();
    if (!token) {
        toast.toast("No token found!");
        return;
    }

    let guild: string = guildIds.shift()!;
    let interval = setInterval(async () => {
        await fetch("https://discord.com/api/v9/users/@me/guilds/settings", {
            method: "PATCH",
            body: JSON.stringify({
                guilds: {
                    [guild]: {
                        muted: true,
                        mute_config: {
                            selected_time_window: -1,
                            end_time: null
                        }
                    }
                }
            }),
            headers: {
                authorization: token as string,
                "content-type": "application/json"
            }
        });

        if (guildIds.length == 0) {
            clearInterval(interval);
        } else {
            guild = guildIds.shift()!;
        }
    }, 5e3);
}

export function Settings(): React.ReactElement {
    return (
        <Flex className={"MuteServers_Settings"}>
            <Button onClick={() => muteServers()}>
                Mute Servers!
            </Button>
        </Flex>
    );
}
