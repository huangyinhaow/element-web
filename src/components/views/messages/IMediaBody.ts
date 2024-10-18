/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { MediaEventHelper } from "../../../utils/MediaEventHelper";

export interface IMediaBody {
    getMediaHelper(): MediaEventHelper | undefined;
}