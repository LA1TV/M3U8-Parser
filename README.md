# M3U8-Parser
A nodejs application which parses a m3u8 playlist and returns the data as json. Uses [tedconf/node-m3u8](https://github.com/tedconf/node-m3u8) for the actual parsing.


Simply run `node application.js "[url to m3u8 playlist file]"` and json will be outputed on stdout that represents the playlist.

E.g. `node application.js "https://devimages.apple.com.edgekey.net/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8"` returns the following at the time of writing this readme.

```json
{
    "items": {
        "PlaylistItem": [],
        "StreamItem": [{
            "attributes": {
                "attributes": {
                    "bandwidth": 263851,
                    "codecs": "mp4a.40.2, avc1.4d400d",
                    "resolution": [416, 234],
                    "audio": "bipbop_audio",
                    "subtitles": "subs"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null,
                "uri": "gear1/prog_index.m3u8"
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 577610,
                    "codecs": "mp4a.40.2, avc1.4d401e",
                    "resolution": [640, 360],
                    "audio": "bipbop_audio",
                    "subtitles": "subs"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null,
                "uri": "gear2/prog_index.m3u8"
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 915905,
                    "codecs": "mp4a.40.2, avc1.4d401f",
                    "resolution": [960, 540],
                    "audio": "bipbop_audio",
                    "subtitles": "subs"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null,
                "uri": "gear3/prog_index.m3u8"
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 1030138,
                    "codecs": "mp4a.40.2, avc1.4d401f",
                    "resolution": [1280, 720],
                    "audio": "bipbop_audio",
                    "subtitles": "subs"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null,
                "uri": "gear4/prog_index.m3u8"
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 1924009,
                    "codecs": "mp4a.40.2, avc1.4d401f",
                    "resolution": [1920, 1080],
                    "audio": "bipbop_audio",
                    "subtitles": "subs"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null,
                "uri": "gear5/prog_index.m3u8"
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 41457,
                    "codecs": "mp4a.40.2",
                    "audio": "bipbop_audio",
                    "subtitles": "subs"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null,
                "uri": "gear0/prog_index.m3u8"
            }
        }],
        "IframeStreamItem": [{
            "attributes": {
                "attributes": {
                    "bandwidth": 28451,
                    "codecs": "avc1.4d400d",
                    "uri": "gear1/iframe_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 181534,
                    "codecs": "avc1.4d401e",
                    "uri": "gear2/iframe_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 297056,
                    "codecs": "avc1.4d401f",
                    "uri": "gear3/iframe_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 339492,
                    "codecs": "avc1.4d401f",
                    "uri": "gear4/iframe_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "bandwidth": 669554,
                    "codecs": "avc1.4d401f",
                    "uri": "gear5/iframe_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }],
        "MediaItem": [{
            "attributes": {
                "attributes": {
                    "type": "AUDIO",
                    "group-id": "bipbop_audio",
                    "language": "eng",
                    "name": "BipBop Audio 1",
                    "autoselect": true,
                    "default": true
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "AUDIO",
                    "group-id": "bipbop_audio",
                    "language": "eng",
                    "name": "BipBop Audio 2",
                    "autoselect": false,
                    "default": false,
                    "uri": "alternate_audio_aac_sinewave/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "English",
                    "default": true,
                    "autoselect": true,
                    "forced": false,
                    "language": "en",
                    "characteristics": "\"public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound\"",
                    "uri": "subtitles/eng/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "English (Forced)",
                    "default": false,
                    "autoselect": false,
                    "forced": true,
                    "language": "en",
                    "uri": "subtitles/eng_forced/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "Français",
                    "default": false,
                    "autoselect": true,
                    "forced": false,
                    "language": "fr",
                    "characteristics": "\"public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound\"",
                    "uri": "subtitles/fra/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "Français (Forced)",
                    "default": false,
                    "autoselect": false,
                    "forced": true,
                    "language": "fr",
                    "uri": "subtitles/fra_forced/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "Español",
                    "default": false,
                    "autoselect": true,
                    "forced": false,
                    "language": "es",
                    "characteristics": "\"public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound\"",
                    "uri": "subtitles/spa/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "Español (Forced)",
                    "default": false,
                    "autoselect": false,
                    "forced": true,
                    "language": "es",
                    "uri": "subtitles/spa_forced/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "日本語",
                    "default": false,
                    "autoselect": true,
                    "forced": false,
                    "language": "ja",
                    "characteristics": "\"public.accessibility.transcribes-spoken-dialog, public.accessibility.describes-music-and-sound\"",
                    "uri": "subtitles/jpn/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }, {
            "attributes": {
                "attributes": {
                    "type": "SUBTITLES",
                    "group-id": "subs",
                    "name": "日本語 (Forced)",
                    "default": false,
                    "autoselect": false,
                    "forced": true,
                    "language": "ja",
                    "uri": "subtitles/jpn_forced/prog_index.m3u8"
                }
            },
            "properties": {
                "byteRange": null,
                "date": null,
                "discontinuity": null,
                "duration": null,
                "title": null
            }
        }]
    },
    "properties": {}
}
```
