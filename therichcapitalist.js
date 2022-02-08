DATA["innovation-bal-1"] = {
    "Ads": [
        {
            "Id": "AD011",
            "AdType": "Industry",
            "Name": "Propaganda Boost",
            "Description": "Applies a x2 payout to all industries",
            "ViewLimit": 3,
            "ResetType": "Now",
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "RewardId": "EXAD6",
                    "Value": 1
                }
            ]
        },
        {
            "Id": "AD012",
            "AdType": "Tool",
            "Name": "Air Drop",
            "ViewLimit": 1,
            "ResetType": "Now",
            "Rewards": [
                {
                    "Reward": "None"
                }
            ]
        }
    ],
    "AirDrops": [
        {
            "Id": 10001,
            "AirDropRewardType": "CoreResource",
            "IsAd": false,
            "IsAdSkippable": false,
            "Weight": 15,
            "MaxAdsPerInterval": -1,
            "RewardCalculation": {
                "A": 1800,
                "B": 5,
                "C": 0.125,
                "D": 25
            }
        },
        {
            "Id": 10002,
            "AirDropRewardType": "PrimaryCurrency",
            "IsAd": false,
            "IsAdSkippable": false,
            "Weight": 10,
            "MaxAdsPerInterval": -1,
            "RewardCalculation": {
                "A": 450,
                "B": 1.55,
                "C": 0.4,
                "D": 10
            }
        },
        {
            "Id": 10003,
            "AirDropRewardType": "PrimaryCurrency",
            "IsAd": true,
            "IsAdSkippable": false,
            "Weight": 50,
            "MaxAdsPerInterval": 4,
            "RewardCalculation": {
                "A": 7500,
                "B": 1.7,
                "C": 0.2,
                "D": -650
            }
        },
        {
            "Id": 10004,
            "AirDropRewardType": "SoftCurrency",
            "IsAd": true,
            "IsAdSkippable": false,
            "Weight": 25,
            "MaxAdsPerInterval": 4,
            "RewardCalculation": {
                "A": 550,
                "B": 1.01,
                "C": 1.001,
                "D": 65
            }
        }
    ],
    "AirDropsConfig": [
        {
            "AirDropBaseInterval": 50,
            "AirDropIntervalVariance": 0.1,
            "AirDropIntervalMultiplier": 1.2,
            "ClaimCountResetInterval": 5400,
            "AdCountResetInterval": 43200,
            "StartupDelay": 30,
            "StartCondition": {
                "ConditionType": "RankReached",
                "Threshold": 2
            }
        }
    ],
    "CardStoreCost": [
        {
            "Rarity": "Common",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "Rare",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "Epic",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "Supreme",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "LteCommon",
            "ScienceCost": 30,
            "GoldCost": 2,
            "AdWatchStackModifier": 0.25
        },
        {
            "Rarity": "LteRare",
            "ScienceCost": 250,
            "GoldCost": 15,
            "AdWatchStackModifier": 0.1
        }
    ],
    "CardStoreStackSize": [
        {
            "Rank": 1,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 10,
            "LteRare": 2
        },
        {
            "Rank": 2,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 10,
            "LteRare": 2
        },
        {
            "Rank": 3,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 10,
            "LteRare": 2
        },
        {
            "Rank": 4,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 20,
            "LteRare": 3
        },
        {
            "Rank": 5,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 20,
            "LteRare": 3
        },
        {
            "Rank": 6,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 20,
            "LteRare": 3
        },
        {
            "Rank": 7,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 20,
            "LteRare": 3
        },
        {
            "Rank": 8,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 30,
            "LteRare": 4
        },
        {
            "Rank": 9,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 30,
            "LteRare": 4
        },
        {
            "Rank": 10,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 30,
            "LteRare": 4
        },
        {
            "Rank": 11,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 30,
            "LteRare": 4
        },
        {
            "Rank": 12,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 30,
            "LteRare": 4
        },
        {
            "Rank": 13,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 14,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 15,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 16,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 17,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 18,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 19,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 20,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        },
        {
            "Rank": 21,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 5
        }
    ],
    "CardToScienceConversion": {
        "Common": 0,
        "Rare": 0,
        "Epic": 0,
        "Supreme": 0,
        "LteCommon": 15,
        "LteRare": 125
    },
    "CrossPromoTitles": [
        {
            "Id": "adcap",
            "IconId": "icon-adcap",
            "TitleSpriteId": "art-adcap-header",
            "BackgroundSpriteId": "art-adcap-header",
            "LinkedAppId_IOS": "927006017",
            "LinkedAppId_Android": "com.kongregate.mobile.adventurecapitalist.google"
        },
        {
            "Id": "adcom",
            "IconId": "icon-adcomm",
            "TitleSpriteId": "art-adcom-header",
            "BackgroundSpriteId": "art-adcom-background",
            "LinkedAppId_IOS": "1225683141",
            "LinkedAppId_Android": "com.kongregate.mobile.adventurecommunist.google"
        }
    ],
    "DailyDealSlotChance": [
        {
            "Slot": 1,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0.5,
            "LteRare": 0.5,
            "GoldCostChance": 0,
            "AdWatchChance": 1
        },
        {
            "Slot": 2,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0.5,
            "LteRare": 0.5,
            "GoldCostChance": 0,
            "AdWatchChance": 0
        },
        {
            "Slot": 3,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0,
            "LteRare": 1,
            "GoldCostChance": 1,
            "AdWatchChance": 0
        }
    ],
    "Experiments": [
        {
            "Id": "EX164",
            "Name": "Basic Time Hack",
            "IconKey": "timehack_4",
            "Lifespan": "OneTime",
            "Lifetime": 1,
            "Type": "None",
            "Rewards": [
                {
                    "Type": "ResourceSurge",
                    "AllResources": true,
                    "Value": 14400,
                    "Description": "Resource Surge! Get 4 hours' worth instantly!"
                }
            ],
            "Description": "Resource Surge! Get 4 hours' worth instantly!"
        },
        {
            "Id": "EX165",
            "Name": "Mega Time Hack",
            "IconKey": "timehack_24",
            "Lifespan": "OneTime",
            "Lifetime": 1,
            "Type": "None",
            "Rewards": [
                {
                    "Type": "ResourceSurge",
                    "AllResources": true,
                    "Value": 86400,
                    "Description": "Resource Surge! Get 24 hours' worth instantly!"
                }
            ],
            "Description": "Resource Surge! Get 24 hours' worth instantly!"
        },
        {
            "Id": "EX167",
            "Name": "Simple Time Hack",
            "IconKey": "timehack_1",
            "Lifespan": "OneTime",
            "Lifetime": 1,
            "Type": "None",
            "Rewards": [
                {
                    "Type": "ResourceSurge",
                    "AllResources": true,
                    "Value": 3600,
                    "Description": "Resource Surge! Get 1 hours' worth instantly!"
                }
            ],
            "Description": "Resource Surge! Get 1 hours' worth instantly!"
        },
        {
            "Id": "EX210",
            "Name": "Double Time",
            "IconKey": "propaganda",
            "Lifespan": "Permanent",
            "Lifetime": 0,
            "Type": "Ad",
            "Rewards": [
                {
                    "Type": "PayoutMultiplier",
                    "AllResources": true,
                    "Value": 2,
                    "Description": "Receive a permanent x2 speed boost to all industries!"
                }
            ],
            "Description": "Receive a permanent x2 speed boost to all industries!"
        },
        {
            "Id": "EX211",
            "Name": "Quintuple Time",
            "IconKey": "propaganda",
            "Lifespan": "Permanent",
            "Lifetime": 0,
            "Type": "Ad",
            "Rewards": [
                {
                    "Type": "PayoutMultiplier",
                    "AllResources": true,
                    "Value": 5,
                    "Description": "Receive a permanent x5 speed boost to all industries!"
                }
            ],
            "Description": "Receive a permanent x5 speed boost to all industries!"
        },
        {
            "Id": "EX215",
            "Name": "Long Term Propaganda",
            "IconKey": "propaganda",
            "Lifespan": "Timed",
            "Lifetime": 5184000,
            "Type": "Ad",
            "Rewards": [
                {
                    "Type": "PayoutMultiplier",
                    "AllResources": true,
                    "Value": 5,
                    "Description": "Receive a x5 speed boost to all industries for 60D!"
                }
            ],
            "Description": "Receive a x5 speed boost to all industries for 60D!"
        },
        {
            "Id": "EXAD6",
            "Name": "Propaganda Boost",
            "IconKey": "propaganda",
            "Lifespan": "Timed",
            "Lifetime": 14400,
            "Type": "Ad",
            "Rewards": [
                {
                    "Type": "PayoutMultiplier",
                    "AllResources": true,
                    "Value": 2,
                    "Description": "x2 boost to all industries!"
                }
            ],
            "Description": "x2 boost for 3 more hours!"
        },
        {
            "Id": "SCH2",
            "Name": "Free Gacha Capsule",
            "Lifespan": "Timed",
            "Lifetime": 7200,
            "Type": "None",
            "Rewards": [
                {
                    "Type": "None",
                    "AllResources": false
                }
            ]
        },
        {
            "Id": "SCH3",
            "Name": "Science Air Drop Availability",
            "IconKey": "darkscience",
            "Lifespan": "Timed",
            "Lifetime": 14400,
            "Type": "None",
            "Rewards": [
                {
                    "Type": "None"
                }
            ]
        },
        {
            "Id": "SCH4",
            "Name": "Air Drop Session Reset",
            "IconKey": "none",
            "Lifespan": "Timed",
            "Lifetime": 14400,
            "Type": "None",
            "Rewards": [
                {
                    "Type": "None"
                }
            ]
        }
    ],
    "FreeGachaData": {
        "TimeBetweenGachas": 7200,
        "MaxStackCount": 2
    },
    "GachaFreeCycle": [
        {
            "Cycle": [
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "plastic",
                "armored",
                "plastic"
            ],
            "ScriptId": "sc3"
        }
    ],
    "GachaGoldCycle": [
        {
            "Cycle": {
                "plastic": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "armored": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
    ],
    "GachaLootTable": [
        {
            "Id": "plastic",
            "CardWeight": 10,
            "RareWeight": -1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 9,
            "ScienceMin": 70,
            "ScienceMax": 80,
            "TrophyMin": 10,
            "TrophyMax": 10,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Normal"
        },
        {
            "Id": "armored",
            "CardWeight": 30,
            "RareWeight": -1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 10,
            "ScienceMin": 140,
            "ScienceMax": 160,
            "TrophyMin": 50,
            "TrophyMax": 50,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Normal"
        },
        {
            "Id": "titanium",
            "CardWeight": 200,
            "RareWeight": -1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 5,
            "ScienceMin": 1400,
            "ScienceMax": 1600,
            "TrophyMin": 0,
            "TrophyMax": 0,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Premium"
        },
        {
            "Id": "tech",
            "CardWeight": 100,
            "RareWeight": -1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 1,
            "ScienceMin": 0,
            "ScienceMax": 0,
            "TrophyMin": 0,
            "TrophyMax": 0,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Fixed"
        },
        {
            "Id": "sc_m01",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m02",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m03",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m04",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m05",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m06",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m07",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m08",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m09",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m10",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m11",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m12",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m13",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m14",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m15",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m16",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m17",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m18",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m19",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m20",
            "Type": "Scripted"
        },
        {
            "Id": "sc3",
            "Type": "Scripted"
        }
    ],
    "GachaScripts": [
        {
            "GachaId": "sc_m01",
            "MimicGachaId": "plastic",
            "Science": 48,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 3
                }
            ]
        },
        {
            "GachaId": "sc_m02",
            "MimicGachaId": "plastic",
            "Science": 45,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 3
                }
            ]
        },
        {
            "GachaId": "sc_m03",
            "MimicGachaId": "plastic",
            "Science": 47,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 3
                }
            ]
        },
        {
            "GachaId": "sc_m04",
            "MimicGachaId": "plastic",
            "Science": 46,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 3
                },
                {
                    "Id": "FUS044",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m05",
            "MimicGachaId": "plastic",
            "Science": 54,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 6
                }
            ]
        },
        {
            "GachaId": "sc_m06",
            "MimicGachaId": "plastic",
            "Science": 55,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 6
                }
            ]
        },
        {
            "GachaId": "sc3",
            "MimicGachaId": "plastic",
            "Science": 50,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS044",
                    "Value": 3
                }
            ]
        },
        {
            "GachaId": "sc_m07",
            "MimicGachaId": "plastic",
            "Science": 53,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "FUS049",
                    "Value": 4
                },
                {
                    "Id": "FUS062",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m08",
            "MimicGachaId": "plastic",
            "Science": 62,
            "Gold": 0,
            "Trophy": 20,
            "Card": [
                {
                    "Id": "FUS054",
                    "Value": 4
                }
            ]
        },
        {
            "GachaId": "sc_m09",
            "MimicGachaId": "plastic",
            "Science": 67,
            "Gold": 0,
            "Trophy": 30,
            "Card": [
                {
                    "Id": "FUS050",
                    "Value": 4
                }
            ]
        },
        {
            "GachaId": "sc_m10",
            "MimicGachaId": "plastic",
            "Science": 83,
            "Gold": 0,
            "Trophy": 40,
            "Card": [
                {
                    "Id": "FUS047",
                    "Value": 4
                },
                {
                    "Id": "FUS064",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m11",
            "MimicGachaId": "plastic",
            "Science": 111,
            "Gold": 0,
            "Trophy": 60,
            "Card": [
                {
                    "Id": "FUS055",
                    "Value": 5
                },
                {
                    "Id": "FUS061",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m12",
            "MimicGachaId": "plastic",
            "Science": 122,
            "Gold": 0,
            "Trophy": 70,
            "Card": [
                {
                    "Id": "FUS051",
                    "Value": 4
                },
                {
                    "Id": "FUS063",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m13",
            "MimicGachaId": "plastic",
            "Science": 135,
            "Gold": 0,
            "Trophy": 80,
            "Card": [
                {
                    "Id": "FUS009",
                    "Value": 4
                },
                {
                    "Id": "FUS069",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m14",
            "MimicGachaId": "plastic",
            "Science": 150,
            "Gold": 0,
            "Trophy": 90,
            "Card": [
                {
                    "Id": "FUS056",
                    "Value": 4
                },
                {
                    "Id": "FUS061",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m15",
            "MimicGachaId": "plastic",
            "Science": 169,
            "Gold": 0,
            "Trophy": 100,
            "Card": [
                {
                    "Id": "FUS010",
                    "Value": 4
                }
            ]
        },
        {
            "GachaId": "sc_m16",
            "MimicGachaId": "plastic",
            "Science": 194,
            "Gold": 0,
            "Trophy": 140,
            "Card": [
                {
                    "Id": "FUS011",
                    "Value": 4
                },
                {
                    "Id": "FUS065",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m17",
            "MimicGachaId": "plastic",
            "Science": 207,
            "Gold": 0,
            "Trophy": 160,
            "Card": [
                {
                    "Id": "FUS052",
                    "Value": 4
                }
            ]
        },
        {
            "GachaId": "sc_m18",
            "MimicGachaId": "plastic",
            "Science": 219,
            "Gold": 0,
            "Trophy": 180,
            "Card": [
                {
                    "Id": "FUS048",
                    "Value": 4
                },
                {
                    "Id": "FUS063",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m19",
            "MimicGachaId": "plastic",
            "Science": 233,
            "Gold": 0,
            "Trophy": 250,
            "Card": [
                {
                    "Id": "FUS057",
                    "Value": 4
                },
                {
                    "Id": "FUS061",
                    "Value": 1
                }
            ]
        },
        {
            "GachaId": "sc_m20",
            "MimicGachaId": "plastic",
            "Science": 247,
            "Gold": 0,
            "Trophy": 300,
            "Card": [
                {
                    "Id": "FUS059",
                    "Value": 4
                }
            ]
        }
    ],
    "GachaStackSplit": [
        {
            "Split": 2,
            "LteCommon": 8,
            "LteRare": 4
        },
        {
            "Split": 3,
            "LteCommon": 25,
            "LteRare": 25
        },
        {
            "Split": 4,
            "LteRare": 75
        }
    ],
    "GeneratorObjectiveLimits": [
        {
            "GeneratorId": "ricefarmer",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "paddy",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "chinampa",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "coldstorage",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "cart",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "skeleton",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "clown",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "merchant",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "plantation",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "quarry",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "shipwright",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "barrack",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "medallion",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "paint",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "sculpture",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "easel",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "mural",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "kabuki",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "scribe",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "papyrus",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "calendar",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "deepbore",
            "MaximumObjectivesForRank": [
                999
            ]
        }
    ],
    "Generators": [
        {
            "Id": "comradegenerator",
            "Name": "Comrade",
            "ResourceType": "comradegenerator",
            "GeneratorType": "Automatic",
            "Generate": {
                "Resource": "comrade",
                "Qty": 1
            },
            "BaseCompletionTime": 1,
            "IncludeInAll": false,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            }
        },
        {
            "Id": "ricefarmer",
            "Name": "Rice Farmer",
            "ResourceType": "ricefarmer",
            "GeneratorType": "Manual",
            "IndustryId": "foodage",
            "Cost": [
                {
                    "Resource": "Maize",
                    "Qty": "1.00E+01"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "1"
                }
            ],
            "Generate": {
                "Resource": "maize",
                "Qty": 5
            },
            "BaseCompletionTime": 2,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "maize",
                    "Threshold": 0
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "foodage",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "paddy",
            "Name": "Paddy",
            "ResourceType": "paddy",
            "GeneratorType": "Manual",
            "IndustryId": "foodage",
            "Cost": [
                {
                    "Resource": "RiceFarmer",
                    "Qty": "1.00E+01"
                },
                {
                    "Resource": "Maize",
                    "Qty": "1.00E+06"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "1"
                }
            ],
            "Generate": {
                "Resource": "ricefarmer",
                "Qty": 7
            },
            "BaseCompletionTime": 4,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "ricefarmer",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "ricefarmer",
                "Threshold": 250
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "chinampa",
            "Name": "Chinampa",
            "ResourceType": "chinampa",
            "GeneratorType": "Manual",
            "IndustryId": "foodage",
            "Cost": [
                {
                    "Resource": "Paddy",
                    "Qty": "1.00E+02"
                },
                {
                    "Resource": "Maize",
                    "Qty": "1.00E+15"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "1"
                }
            ],
            "Generate": {
                "Resource": "paddy",
                "Qty": 9
            },
            "BaseCompletionTime": 8,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "paddy",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "paddy",
                "Threshold": 100000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "coldstorage",
            "Name": "Coldstorage",
            "ResourceType": "coldstorage",
            "GeneratorType": "Manual",
            "IndustryId": "foodage",
            "Cost": [
                {
                    "Resource": "Chinampa",
                    "Qty": "1.00E+03"
                },
                {
                    "Resource": "Maize",
                    "Qty": 1e+27
                },
                {
                    "Resource": "Comrade",
                    "Qty": "1"
                }
            ],
            "Generate": {
                "Resource": "chinampa",
                "Qty": 11
            },
            "BaseCompletionTime": 16,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "chinampa",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "chinampa",
                "Threshold": 5000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "cart",
            "Name": "Cart",
            "ResourceType": "cart",
            "GeneratorType": "Manual",
            "IndustryId": "foodage",
            "Cost": [
                {
                    "Resource": "Coldstorage",
                    "Qty": "5.00E+05"
                },
                {
                    "Resource": "Maize",
                    "Qty": "1.00E+44"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "1"
                }
            ],
            "Generate": {
                "Resource": "coldstorage",
                "Qty": 13
            },
            "BaseCompletionTime": 32,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "coldstorage",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "coldstorage",
                "Threshold": 250000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "merchant",
            "Name": "Merchant",
            "ResourceType": "merchant",
            "GeneratorType": "Manual",
            "IndustryId": "productionage",
            "Cost": [
                {
                    "Resource": "Tool",
                    "Qty": "2.5E+01"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "3"
                }
            ],
            "Generate": {
                "Resource": "tool",
                "Qty": 10
            },
            "BaseCompletionTime": 3,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "maize",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "productionage",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "plantation",
            "Name": "Plantation",
            "ResourceType": "plantation",
            "GeneratorType": "Manual",
            "IndustryId": "productionage",
            "Cost": [
                {
                    "Resource": "Merchant",
                    "Qty": "1.0E+03"
                },
                {
                    "Resource": "Tool",
                    "Qty": "1.0E+09"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "3"
                }
            ],
            "Generate": {
                "Resource": "merchant",
                "Qty": 15
            },
            "BaseCompletionTime": 9,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "merchant",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "merchant",
                "Threshold": 500000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "quarry",
            "Name": "Quarry",
            "ResourceType": "quarry",
            "GeneratorType": "Manual",
            "IndustryId": "productionage",
            "Cost": [
                {
                    "Resource": "Plantation",
                    "Qty": "1.0E+04"
                },
                {
                    "Resource": "Tool",
                    "Qty": "1.0E+20"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "3"
                }
            ],
            "Generate": {
                "Resource": "plantation",
                "Qty": 20
            },
            "BaseCompletionTime": 27,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "plantation",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "plantation",
                "Threshold": 5000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "shipwright",
            "Name": "Shipwright",
            "ResourceType": "shipwright",
            "GeneratorType": "Manual",
            "IndustryId": "productionage",
            "Cost": [
                {
                    "Resource": "Quarry",
                    "Qty": 100000
                },
                {
                    "Resource": "Tool",
                    "Qty": "1.0E+38"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "3"
                }
            ],
            "Generate": {
                "Resource": "quarry",
                "Qty": 25
            },
            "BaseCompletionTime": 81,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "quarry",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "quarry",
                "Threshold": 15000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "barrack",
            "Name": "Barrack",
            "ResourceType": "barrack",
            "GeneratorType": "Manual",
            "IndustryId": "productionage",
            "Cost": [
                {
                    "Resource": "Shipwright",
                    "Qty": 10000000
                },
                {
                    "Resource": "Tool",
                    "Qty": "1.0E+51"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "3"
                }
            ],
            "Generate": {
                "Resource": "shipwright",
                "Qty": 30
            },
            "BaseCompletionTime": 243,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "shipwright",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "shipwright",
                "Threshold": 25000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "paint",
            "Name": "Paint",
            "ResourceType": "paint",
            "GeneratorType": "Manual",
            "IndustryId": "cultureage",
            "Cost": [
                {
                    "Resource": "Ore",
                    "Qty": "5.0E+01"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "5"
                }
            ],
            "Generate": {
                "Resource": "ore",
                "Qty": 15
            },
            "BaseCompletionTime": 4,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "tool",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "cultureage",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "sculpture",
            "Name": "Sculpture",
            "ResourceType": "sculpture",
            "GeneratorType": "Manual",
            "IndustryId": "cultureage",
            "Cost": [
                {
                    "Resource": "Paint",
                    "Qty": "1.0E+03"
                },
                {
                    "Resource": "Ore",
                    "Qty": "1.0E+12"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "5"
                }
            ],
            "Generate": {
                "Resource": "paint",
                "Qty": 25
            },
            "BaseCompletionTime": 16,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "paint",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "paint",
                "Threshold": 1000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "easel",
            "Name": "Easel",
            "ResourceType": "easel",
            "GeneratorType": "Manual",
            "IndustryId": "cultureage",
            "Cost": [
                {
                    "Resource": "Sculpture",
                    "Qty": "1.0E+04"
                },
                {
                    "Resource": "Ore",
                    "Qty": "1.0E+21"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "5"
                }
            ],
            "Generate": {
                "Resource": "sculpture",
                "Qty": 35
            },
            "BaseCompletionTime": 64,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "sculpture",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "sculpture",
                "Threshold": 5000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "mural",
            "Name": "Mural",
            "ResourceType": "mural",
            "GeneratorType": "Manual",
            "IndustryId": "cultureage",
            "Cost": [
                {
                    "Resource": "Easel",
                    "Qty": "1.0E+05"
                },
                {
                    "Resource": "Ore",
                    "Qty": "1.0E+38"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "5"
                }
            ],
            "Generate": {
                "Resource": "easel",
                "Qty": 45
            },
            "BaseCompletionTime": 256,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "easel",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "easel",
                "Threshold": 15000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "kabuki",
            "Name": "Kabuki",
            "ResourceType": "kabuki",
            "GeneratorType": "Manual",
            "IndustryId": "cultureage",
            "Cost": [
                {
                    "Resource": "Mural",
                    "Qty": "1.0E+07"
                },
                {
                    "Resource": "Ore",
                    "Qty": "1.0E+51"
                },
                {
                    "Resource": "Comrade",
                    "Qty": "5"
                }
            ],
            "Generate": {
                "Resource": "mural",
                "Qty": 55
            },
            "BaseCompletionTime": 1024,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "mural",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "mural",
                "Threshold": 25000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "scribe",
            "Name": "scribe",
            "ResourceType": "scribe",
            "GeneratorType": "Manual",
            "IndustryId": "scienceage",
            "Cost": [
                {
                    "Resource": "Medicine",
                    "Qty": 100
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "medicine",
                "Qty": 20
            },
            "BaseCompletionTime": 5,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "ore",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "scienceage",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "papyrus",
            "Name": "Papyrus",
            "ResourceType": "papyrus",
            "GeneratorType": "Manual",
            "IndustryId": "scienceage",
            "Cost": [
                {
                    "Resource": "scribe",
                    "Qty": 1000
                },
                {
                    "Resource": "Medicine",
                    "Qty": 10000000000
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "scribe",
                "Qty": 30
            },
            "BaseCompletionTime": 20,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "scribe",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "scribe",
                "Threshold": 30000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "calendar",
            "Name": "Calendar",
            "ResourceType": "calendar",
            "GeneratorType": "Manual",
            "IndustryId": "scienceage",
            "Cost": [
                {
                    "Resource": "Papyrus",
                    "Qty": 10000
                },
                {
                    "Resource": "Medicine",
                    "Qty": 1e+23
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "papyrus",
                "Qty": 40
            },
            "BaseCompletionTime": 100,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "papyrus",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "papyrus",
                "Threshold": 4000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "deepbore",
            "Name": "Deepbore",
            "ResourceType": "deepbore",
            "GeneratorType": "Manual",
            "IndustryId": "scienceage",
            "Cost": [
                {
                    "Resource": "Calendar",
                    "Qty": 100000
                },
                {
                    "Resource": "Medicine",
                    "Qty": 1e+31
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "calendar",
                "Qty": 50
            },
            "BaseCompletionTime": 500,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "calendar",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "calendar",
                "Threshold": 5000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "medallion",
            "Name": "Medallion",
            "ResourceType": "medallion",
            "GeneratorType": "Manual",
            "IndustryId": "scienceage",
            "Cost": [
                {
                    "Resource": "Deepbore",
                    "Qty": 1000000
                },
                {
                    "Resource": "Medicine",
                    "Qty": 1e+47
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "deepbore",
                "Qty": 60
            },
            "BaseCompletionTime": 5000,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "deepbore",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "deepbore",
                "Threshold": 10000000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 2
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        }
    ],
    "Industries": [
        {
            "Id": "foodage",
            "SortingOrder": 1,
            "VisibleConditions": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "maize"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "maize",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "productionage",
            "SortingOrder": 2,
            "UnlockCostResourceId": "Maize",
            "UnlockCostResourceQty": 20000000000000,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "foodage"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "maize",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "cultureage",
            "SortingOrder": 3,
            "UnlockCostResourceId": "Tool",
            "UnlockCostResourceQty": 1000000000000,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "foodage"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "productionage",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "scienceage",
            "SortingOrder": 4,
            "UnlockCostResourceId": "Ore",
            "UnlockCostResourceQty": 100000000000000,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "productionage"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "cultureage",
                    "Threshold": 0
                }
            ]
        }
    ],
    "MiscBalance": {
        "SoftCurrencyId": "darkscience",
        "PrimaryGeneratorId": "comradegenerator",
        "PrimaryResourceId": "comrade",
        "HardToSoftCurrencyConversionRatio": 20,
        "OfferwallPlatforms": "android",
        "TotalSpendIncludesLte": false,
        "DaysForRecentSpend": 26,
        "RanksToTriggerOffers": "4,7,10,13,16,19,20",
        "ComradeSpendWarningEnableRank": 3,
        "ReferralReward": 110
    },
    "Missions": [
        {
            "Id": "M0001",
            "Rank": 1,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 3,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 0
        },
        {
            "Id": "M0002",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 101,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 1
        },
        {
            "Id": "M0003",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 40,
                "ConditionId": "ricefarmer"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 2
        },
        {
            "Id": "M0004",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 1,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 3
        },
        {
            "Id": "M0005",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 250,
                "ConditionId": "ricefarmer"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 4
        },
        {
            "Id": "M0006",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 65,
                "ConditionId": "paddy"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 5
        },
        {
            "Id": "M0007",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 300,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 6
        },
        {
            "Id": "M0008",
            "Rank": 2,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1000000000000,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 7
        },
        {
            "Id": "M0009",
            "Rank": 2,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3330,
                "ConditionId": "paddy"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 8
        },
        {
            "Id": "M0010",
            "Rank": 2,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 180,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 9
        },
        {
            "Id": "M0011",
            "Rank": 2,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 300,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 10
        },
        {
            "Id": "M0012",
            "Rank": 3,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 12300,
                "ConditionId": "paddy"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 11
        },
        {
            "Id": "M0013",
            "Rank": 3,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "productionage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 12
        },
        {
            "Id": "M0014",
            "Rank": 3,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 2,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 13
        },
        {
            "Id": "M0015",
            "Rank": 3,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 250,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 14
        },
        {
            "Id": "M0016",
            "Rank": 3,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 10100,
                "ConditionId": "merchant"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m07",
                "Value": 1
            },
            "Index": 15
        },
        {
            "Id": "M0017",
            "Rank": 4,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 88900,
                "ConditionId": "paddy"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 16
        },
        {
            "Id": "M0018",
            "Rank": 4,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1340,
                "ConditionId": "chinampa"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 17
        },
        {
            "Id": "M0019",
            "Rank": 4,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 400,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 18
        },
        {
            "Id": "M0020",
            "Rank": 4,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5.88e+21,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 19
        },
        {
            "Id": "M0021",
            "Rank": 5,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 101000,
                "ConditionId": "merchant"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 20
        },
        {
            "Id": "M0022",
            "Rank": 5,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 777000000000,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 21
        },
        {
            "Id": "M0023",
            "Rank": 5,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 22
        },
        {
            "Id": "M0024",
            "Rank": 5,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 500000,
                "ConditionId": "merchant"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 23
        },
        {
            "Id": "M0025",
            "Rank": 5,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "cultureage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 24
        },
        {
            "Id": "M0026",
            "Rank": 5,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 2,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 25
        },
        {
            "Id": "M0027",
            "Rank": 6,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 300,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 26
        },
        {
            "Id": "M0028",
            "Rank": 6,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2500000,
                "ConditionId": "chinampa"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 27
        },
        {
            "Id": "M0029",
            "Rank": 6,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 28
        },
        {
            "Id": "M0030",
            "Rank": 6,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.22e+26,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 29
        },
        {
            "Id": "M0031",
            "Rank": 6,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5000,
                "ConditionId": "plantation"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m08",
                "Value": 1
            },
            "Index": 30
        },
        {
            "Id": "M0032",
            "Rank": 7,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 333000,
                "ConditionId": "paint"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m09",
                "Value": 1
            },
            "Index": 31
        },
        {
            "Id": "M0033",
            "Rank": 7,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 700,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 32
        },
        {
            "Id": "M0034",
            "Rank": 7,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5000000,
                "ConditionId": "chinampa"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 33
        },
        {
            "Id": "M0035",
            "Rank": 7,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 480000000000,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 34
        },
        {
            "Id": "M0036",
            "Rank": 8,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 171,
                "ConditionId": "coldstorage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m10",
                "Value": 1
            },
            "Index": 35
        },
        {
            "Id": "M0037",
            "Rank": 8,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2100000,
                "ConditionId": "plantation"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 36
        },
        {
            "Id": "M0038",
            "Rank": 8,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+30,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 37
        },
        {
            "Id": "M0039",
            "Rank": 8,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 300,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 38
        },
        {
            "Id": "M0040",
            "Rank": 8,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 22500,
                "ConditionId": "coldstorage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 39
        },
        {
            "Id": "M0041",
            "Rank": 8,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 1000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 40
        },
        {
            "Id": "M0042",
            "Rank": 9,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5,
                "ConditionId": "sculpture"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m11",
                "Value": 1
            },
            "Index": 41
        },
        {
            "Id": "M0043",
            "Rank": 9,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 400,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 42
        },
        {
            "Id": "M0044",
            "Rank": 9,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 44,
                "ConditionId": "quarry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m12",
                "Value": 1
            },
            "Index": 43
        },
        {
            "Id": "M0045",
            "Rank": 9,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 150000,
                "ConditionId": "sculpture"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 44
        },
        {
            "Id": "M0046",
            "Rank": 9,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "scienceage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 45
        },
        {
            "Id": "M0047",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9,
                "ConditionId": "scribe"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 46
        },
        {
            "Id": "M0048",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 11100000,
                "ConditionId": "coldstorage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 47
        },
        {
            "Id": "M0049",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 400,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m13",
                "Value": 1
            },
            "Index": 48
        },
        {
            "Id": "M0050",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7000,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 49
        },
        {
            "Id": "M0051",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 20000,
                "ConditionId": "scribe"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 50
        },
        {
            "Id": "M0052",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3000000,
                "ConditionId": "quarry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 51
        },
        {
            "Id": "M0053",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.8e+38,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 52
        },
        {
            "Id": "M0054",
            "Rank": 10,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 1200,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 53
        },
        {
            "Id": "M0055",
            "Rank": 11,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 44,
                "ConditionId": "easel"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 54
        },
        {
            "Id": "M0056",
            "Rank": 11,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 660000000000,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m14",
                "Value": 1
            },
            "Index": 55
        },
        {
            "Id": "M0057",
            "Rank": 11,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 111,
                "ConditionId": "papyrus"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 56
        },
        {
            "Id": "M0058",
            "Rank": 11,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.6e+32,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 57
        },
        {
            "Id": "M0059",
            "Rank": 11,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 48000000,
                "ConditionId": "coldstorage"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 58
        },
        {
            "Id": "M0060",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.33e+24,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m15",
                "Value": 1
            },
            "Index": 59
        },
        {
            "Id": "M0061",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 22200,
                "ConditionId": "papyrus"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 60
        },
        {
            "Id": "M0062",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 61
        },
        {
            "Id": "M0063",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 10000000,
                "ConditionId": "quarry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 62
        },
        {
            "Id": "M0064",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.9e+44,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 63
        },
        {
            "Id": "M0065",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3330000,
                "ConditionId": "papyrus"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 64
        },
        {
            "Id": "M0066",
            "Rank": 12,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 222000000000000000000,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 65
        },
        {
            "Id": "M0067",
            "Rank": 13,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 974000,
                "ConditionId": "easel"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 66
        },
        {
            "Id": "M0068",
            "Rank": 13,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.44e+37,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 67
        },
        {
            "Id": "M0069",
            "Rank": 13,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 1600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 68
        },
        {
            "Id": "M0070",
            "Rank": 13,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 222,
                "ConditionId": "calendar"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 69
        },
        {
            "Id": "M0071",
            "Rank": 13,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 292,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 70
        },
        {
            "Id": "M0072",
            "Rank": 13,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.7e+34,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 71
        },
        {
            "Id": "M0073",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 69,
                "ConditionId": "shipwright"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 72
        },
        {
            "Id": "M0074",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.5e+46,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m16",
                "Value": 1
            },
            "Index": 73
        },
        {
            "Id": "M0075",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 343000,
                "ConditionId": "calendar"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 74
        },
        {
            "Id": "M0076",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 75
        },
        {
            "Id": "M0077",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 14000000,
                "ConditionId": "easel"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 76
        },
        {
            "Id": "M0078",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+39,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 77
        },
        {
            "Id": "M0079",
            "Rank": 14,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+30,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m18",
                "Value": 1
            },
            "Index": 78
        },
        {
            "Id": "M0080",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 13200,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 79
        },
        {
            "Id": "M0081",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.25e+42,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 80
        },
        {
            "Id": "M0082",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 2000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 81
        },
        {
            "Id": "M0083",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4400000,
                "ConditionId": "calendar"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m17",
                "Value": 1
            },
            "Index": 82
        },
        {
            "Id": "M0084",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 789000,
                "ConditionId": "shipwright"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 83
        },
        {
            "Id": "M0085",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.3e+54,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 84
        },
        {
            "Id": "M0086",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 15,
                "ConditionId": "mural"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 85
        },
        {
            "Id": "M0087",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+46,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 86
        },
        {
            "Id": "M0088",
            "Rank": 15,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 2000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 87
        },
        {
            "Id": "M0089",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7560000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 88
        },
        {
            "Id": "M0090",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.57e+44,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 89
        },
        {
            "Id": "M0091",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 123,
                "ConditionId": "deepbore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 90
        },
        {
            "Id": "M0092",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 24000000,
                "ConditionId": "shipwright"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 91
        },
        {
            "Id": "M0093",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.8e+58,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 92
        },
        {
            "Id": "M0094",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 3,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 93
        },
        {
            "Id": "M0095",
            "Rank": 16,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5.25e+36,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m19",
                "Value": 1
            },
            "Index": 94
        },
        {
            "Id": "M0096",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3650,
                "ConditionId": "mural"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 95
        },
        {
            "Id": "M0097",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.44e+49,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m20",
                "Value": 1
            },
            "Index": 96
        },
        {
            "Id": "M0098",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 222000,
                "ConditionId": "deepbore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 97
        },
        {
            "Id": "M0099",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9670000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 98
        },
        {
            "Id": "M0100",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.7e+48,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 99
        },
        {
            "Id": "M0101",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 100
        },
        {
            "Id": "M0102",
            "Rank": 17,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 234000000,
                "ConditionId": "shipwright"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 101
        },
        {
            "Id": "M0103",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.5e+63,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 102
        },
        {
            "Id": "M0104",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5000000,
                "ConditionId": "mural"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 103
        },
        {
            "Id": "M0105",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9900000,
                "ConditionId": "deepbore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 104
        },
        {
            "Id": "M0106",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.63e+50,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 105
        },
        {
            "Id": "M0107",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 2500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 106
        },
        {
            "Id": "M0108",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 33300000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 107
        },
        {
            "Id": "M0109",
            "Rank": 18,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.9e+50,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 108
        },
        {
            "Id": "M0110",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 212,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 109
        },
        {
            "Id": "M0111",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.57e+38,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 110
        },
        {
            "Id": "M0112",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 250,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 111
        },
        {
            "Id": "M0113",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.4e+65,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 112
        },
        {
            "Id": "M0114",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 113
        },
        {
            "Id": "M0115",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 45700,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 114
        },
        {
            "Id": "M0116",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7770000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 115
        },
        {
            "Id": "M0117",
            "Rank": 19,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.2e+54,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 116
        },
        {
            "Id": "M0118",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 99900000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 117
        },
        {
            "Id": "M0119",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.2e+56,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 118
        },
        {
            "Id": "M0120",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 3,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 119
        },
        {
            "Id": "M0121",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.17e+42,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 120
        },
        {
            "Id": "M0122",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 11100,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 121
        },
        {
            "Id": "M0123",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.36e+66,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 122
        },
        {
            "Id": "M0124",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 26800000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 123
        },
        {
            "Id": "M0125",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+64,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 124
        },
        {
            "Id": "M0126",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 123000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 125
        },
        {
            "Id": "M0127",
            "Rank": 20,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 700,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 126
        },
        {
            "Id": "M0128",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 667000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 127
        },
        {
            "Id": "M0129",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.78e+60,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 128
        },
        {
            "Id": "M0130",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 67000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 129
        },
        {
            "Id": "M0131",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 12300000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 130
        },
        {
            "Id": "M0132",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+68,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 131
        },
        {
            "Id": "M0133",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 3000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 132
        },
        {
            "Id": "M0134",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 55300000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 133
        },
        {
            "Id": "M0135",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.6e+62,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 134
        },
        {
            "Id": "M0136",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 999000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 135
        },
        {
            "Id": "M0137",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.9e+62,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 136
        },
        {
            "Id": "M0138",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 137
        },
        {
            "Id": "M0139",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 470000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 138
        },
        {
            "Id": "M0140",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.6e+70,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 139
        },
        {
            "Id": "M0141",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 864000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 140
        },
        {
            "Id": "M0142",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.5e+66,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 141
        },
        {
            "Id": "M0143",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 2,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 142
        },
        {
            "Id": "M0144",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6670000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 143
        },
        {
            "Id": "M0145",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.6e+65,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 144
        },
        {
            "Id": "M0146",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 390000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 145
        },
        {
            "Id": "M0147",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.3e+72,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 146
        },
        {
            "Id": "M0148",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 900,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 147
        },
        {
            "Id": "M0149",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1100000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 148
        },
        {
            "Id": "M0150",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+70,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 149
        },
        {
            "Id": "M0151",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 92300000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 150
        },
        {
            "Id": "M0152",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+75,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 151
        },
        {
            "Id": "M0153",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4400000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 152
        },
        {
            "Id": "M0154",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+72,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 153
        },
        {
            "Id": "M0155",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9990000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 154
        },
        {
            "Id": "M0156",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+46,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 155
        },
        {
            "Id": "M0157",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 890000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 156
        },
        {
            "Id": "M0158",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.3e+68,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 157
        },
        {
            "Id": "M0159",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 123000000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 158
        },
        {
            "Id": "M0160",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.3e+77,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 159
        },
        {
            "Id": "M0161",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8800000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 160
        },
        {
            "Id": "M0162",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+72,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 161
        },
        {
            "Id": "M0163",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 33300000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 162
        },
        {
            "Id": "M0164",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.88e+46,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 163
        },
        {
            "Id": "M0165",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2200000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 164
        },
        {
            "Id": "M0166",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+68,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 165
        },
        {
            "Id": "M0167",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 923000000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 166
        },
        {
            "Id": "M0168",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+77,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 167
        },
        {
            "Id": "M0169",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 44000000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 168
        },
        {
            "Id": "M0170",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+74,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 169
        },
        {
            "Id": "M0171",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 999000000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 170
        },
        {
            "Id": "M0172",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+49,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 171
        },
        {
            "Id": "M0173",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8900000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 172
        },
        {
            "Id": "M0174",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.3e+70,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 173
        },
        {
            "Id": "M0175",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1230000000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 174
        },
        {
            "Id": "M0176",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.3e+79,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 175
        },
        {
            "Id": "M0177",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 88000000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 176
        },
        {
            "Id": "M0178",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+74,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 177
        },
        {
            "Id": "M0179",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3330000000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 178
        },
        {
            "Id": "M0180",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.88e+49,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 179
        },
        {
            "Id": "M0181",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 22000000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 180
        },
        {
            "Id": "M0182",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+70,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 181
        },
        {
            "Id": "M0183",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9230000000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 182
        },
        {
            "Id": "M0184",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+79,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 183
        },
        {
            "Id": "M0185",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 440000000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 184
        },
        {
            "Id": "M0186",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+80,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 185
        },
        {
            "Id": "M0187",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 99900000000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 186
        },
        {
            "Id": "M0188",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+55,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 187
        },
        {
            "Id": "M0189",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 89000000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 188
        },
        {
            "Id": "M0190",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.3e+75,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 189
        },
        {
            "Id": "M0191",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 12300000000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 190
        },
        {
            "Id": "M0192",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+88,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 191
        },
        {
            "Id": "M0193",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8800000000000,
                "ConditionId": "kabuki"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 192
        },
        {
            "Id": "M0194",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+80,
                "ConditionId": "tool"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 193
        },
        {
            "Id": "M0195",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 333000000000000,
                "ConditionId": "cart"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 194
        },
        {
            "Id": "M0196",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.99e+60,
                "ConditionId": "medicine"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 195
        },
        {
            "Id": "M0197",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 220000000000,
                "ConditionId": "barrack"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 196
        },
        {
            "Id": "M0198",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+80,
                "ConditionId": "ore"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 197
        },
        {
            "Id": "M0199",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 92300000000,
                "ConditionId": "medallion"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            },
            "Index": 198
        },
        {
            "Id": "M0200",
            "Rank": 21,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.5e+90,
                "ConditionId": "maize"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            },
            "Index": 199
        }
    ],
    "OfferPools": [
        {
            "SegmentId": "LteSegment",
            "OfferType": "Permanent",
            "ShowTakeover": false,
            "OfferDataList": [
                {
                    "ItemId": "t07_lte_starter",
                    "Duration": 0
                }
            ]
        },
        {
            "SegmentId": "LteSegment",
            "OfferType": "RankUp",
            "ShowTakeover": true,
            "OfferDataList": [
                {
                    "ItemId": "t04_lte_rank4",
                    "Duration": 0
                },
                {
                    "ItemId": "t05_lte_rank7",
                    "Duration": 0
                },
                {
                    "ItemId": "t08_lte_rank10",
                    "Duration": 0
                },
                {
                    "ItemId": "t09_lte_rank13",
                    "Duration": 0
                },
                {
                    "ItemId": "t10_lte_rank16",
                    "Duration": 0
                },
                {
                    "ItemId": "t09_lte_rank19",
                    "Duration": 0
                },
                {
                    "ItemId": "t15_lte_rank20",
                    "Duration": 0
                }
            ]
        }
    ],
    "Promotions": [],
    "Ranks": [
        {
            "Rank": "1",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "0",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.3,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 0.6,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 1,
            "AirDropScience": 25,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "2",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.6,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 0.7,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 1,
            "AirDropScience": 50,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "3",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "4",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.8,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 0.8,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 2,
            "AirDropScience": 70,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "4",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 0.9,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 3,
            "AirDropScience": 85,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "5",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "4",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.1,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 4,
            "AirDropScience": 100,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "6",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.2,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.1,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 5,
            "AirDropScience": 110,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "7",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.4,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.2,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 6,
            "AirDropScience": 120,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "8",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "4",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.7,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.3,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 7,
            "AirDropScience": 130,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "9",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.4,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 8,
            "AirDropScience": 135,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "10",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.3,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.5,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 9,
            "AirDropScience": 140,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "11",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.6,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.6,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 10,
            "AirDropScience": 145,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "12",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.9,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.7,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 12,
            "AirDropScience": 150,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "13",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.2,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.8,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 14,
            "AirDropScience": 155,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "14",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.4,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.9,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 16,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "15",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.6,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 2,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 18,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "16",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "9",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.8,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 2.2,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 20,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "17",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.1,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 2.4,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 25,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "18",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.4,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 2.6,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 30,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "19",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.6,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 2.8,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 35,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "20",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.8,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": "3",
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": "40",
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "21",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 5,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": "3.2",
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": "50",
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        }
    ],
    "ResearcherRankCosts": [
        {
            "Rarity": "Common",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "Rare",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "Epic",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "Supreme",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "LteCommon",
            "Quantity": [
                5,
                10,
                20,
                50,
                100,
                200,
                400,
                800
            ],
            "Science": [
                100,
                200,
                300,
                400,
                800,
                2000,
                4000,
                8000
            ]
        },
        {
            "Rarity": "LteRare",
            "Quantity": [
                5,
                10,
                20,
                50,
                100,
                200
            ],
            "Science": [
                250,
                500,
                1000,
                2500,
                5000,
                10000
            ]
        }
    ],
    "Researchers": [
        {
            "Id": "FUS044",
            "Name": "Jack Oâ€™Berry",
            "Description": "researcher.FUS044.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "ricefarmer"
            ],
            "ExpoMultiplier": 1,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS045",
            "Name": "Bateratu",
            "Description": "researcher.FUS045.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "paddy"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 2,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS046",
            "Name": "Antobbit",
            "Description": "researcher.FUS046.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "chinampa"
            ],
            "ExpoMultiplier": 3,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 4,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS047",
            "Name": "Spiderplump",
            "Description": "researcher.FUS047.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "coldstorage"
            ],
            "ExpoMultiplier": 4,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 8,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS048",
            "Name": "Cat Oâ€™bourne",
            "Description": "researcher.FUS048.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "cart"
            ],
            "ExpoMultiplier": 5,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 14,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS049",
            "Name": "Adria Granger",
            "Description": "researcher.FUS049.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "merchant"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 4,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS050",
            "Name": "Harry Rivia",
            "Description": "researcher.FUS050.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "plantation"
            ],
            "ExpoMultiplier": 4,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 7,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS051",
            "Name": "Mr. Woodsy",
            "Description": "researcher.FUS051.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "quarry"
            ],
            "ExpoMultiplier": 6,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 9,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS052",
            "Name": "Pindoll",
            "Description": "researcher.FUS052.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "shipwright"
            ],
            "ExpoMultiplier": 8,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 14,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS053",
            "Name": "Sarula",
            "Description": "researcher.FUS053.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "barrack"
            ],
            "ExpoMultiplier": 10,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 19,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS054",
            "Name": "Lord Balsidious",
            "Description": "researcher.FUS054.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "paint"
            ],
            "ExpoMultiplier": 3,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 7,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS055",
            "Name": "Groundskeeper Lara",
            "Description": "researcher.FUS055.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "sculpture"
            ],
            "ExpoMultiplier": 6,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 9,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS056",
            "Name": "Slimasper",
            "Description": "researcher.FUS056.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "easel"
            ],
            "ExpoMultiplier": 9,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS057",
            "Name": "Tinker of the Forest",
            "Description": "researcher.FUS057.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "mural"
            ],
            "ExpoMultiplier": 12,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 15,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS058",
            "Name": "Alfred Lurch",
            "Description": "researcher.FUS058.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "kabuki"
            ],
            "ExpoMultiplier": 15,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 20,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS009",
            "Name": "Pepper Clown",
            "Description": "researcher.FUS009.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "scribe"
            ],
            "ExpoMultiplier": 4,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 10,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS010",
            "Name": "Rob Nelligan",
            "Description": "researcher.FUS010.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "papyrus"
            ],
            "ExpoMultiplier": 8,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS011",
            "Name": "Jill Valnades",
            "Description": "researcher.FUS011.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "calendar"
            ],
            "ExpoMultiplier": 12,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 13,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS059",
            "Name": "Michy Summers",
            "Description": "researcher.FUS059.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "deepbore"
            ],
            "ExpoMultiplier": 14,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 16,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS060",
            "Name": "Tarmanesis",
            "Description": "researcher.FUS060.desc",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": [
                "medallion"
            ],
            "ExpoMultiplier": 16,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 19,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS061",
            "Name": "Mrs. Spookley",
            "Description": "researcher.FUS061.desc",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "maize"
            ],
            "ExpoMultiplier": 1.5,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS063",
            "Name": "Mummydore",
            "Description": "researcher.FUS063.desc",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "tool"
            ],
            "ExpoMultiplier": 2.5,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 3,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS065",
            "Name": "Slender Rider",
            "Description": "researcher.FUS065.desc",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "ore"
            ],
            "ExpoMultiplier": 3.5,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS067",
            "Name": "Alucombie",
            "Description": "researcher.FUS067.desc",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "medicine"
            ],
            "ExpoMultiplier": 4.5,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 18,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS062",
            "Name": "Wednesday Myers",
            "Description": "researcher.FUS062.desc",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "foodage"
            ],
            "ExpoMultiplier": 0.5,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS064",
            "Name": "Fiona Spellman",
            "Description": "researcher.FUS064.desc",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "productionage"
            ],
            "ExpoMultiplier": 1,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 4,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS066",
            "Name": "Sub-Monster",
            "Description": "researcher.FUS066.desc",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "cultureage"
            ],
            "ExpoMultiplier": 1.5,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 13,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS068",
            "Name": "Governor de Leon",
            "Description": "researcher.FUS068.desc",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "scienceage"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 16,
            "ResearchOutputType": "Constant"
        },
        {
            "Id": "FUS069",
            "Name": "Radamage",
            "Description": "researcher.FUS069.desc",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "foodage, productionage, cultureage, scienceage"
            ],
            "ExpoMultiplier": 1.25,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 10,
            "ResearchOutputType": "Constant"
        }
    ],
    "Resources": [
        {
            "Id": "maize",
            "Singular": "Maize",
            "Plural": "Maize",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "tool",
            "Singular": "Tool",
            "Plural": "Tool",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "ore",
            "Singular": "Ore",
            "Plural": "Ore",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "medicine",
            "Singular": "Medicine",
            "Plural": "Medicine",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "ricefarmer",
            "Singular": "RiceFarmer",
            "Plural": "RiceFarmers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "paddy",
            "Singular": "Paddy",
            "Plural": "Paddy",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "chinampa",
            "Singular": "Chinampa",
            "Plural": "Chinampa",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "coldstorage",
            "Singular": "Coldstorage",
            "Plural": "Coldstorage",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "cart",
            "Singular": "Cart",
            "Plural": "Cart",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "merchant",
            "Singular": "Merchant",
            "Plural": "Merchant",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "plantation",
            "Singular": "Plantation",
            "Plural": "Plantation",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "quarry",
            "Singular": "Quarry",
            "Plural": "Quarry",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "shipwright",
            "Singular": "Shipwright",
            "Plural": "Shipwright",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "barrack",
            "Singular": "Barrack",
            "Plural": "Barrack",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "paint",
            "Singular": "Paint",
            "Plural": "Paint",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "sculpture",
            "Singular": "Sculpture",
            "Plural": "Sculpture",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "easel",
            "Singular": "Easel",
            "Plural": "Easel",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "mural",
            "Singular": "Mural",
            "Plural": "Mural",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "kabuki",
            "Singular": "Kabuki",
            "Plural": "Kabuki",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "scribe",
            "Singular": "scribe",
            "Plural": "scribe",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "papyrus",
            "Singular": "Papyrus",
            "Plural": "Papyrus",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "calendar",
            "Singular": "Calendar",
            "Plural": "Calendar",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "deepbore",
            "Singular": "Deepbore",
            "Plural": "Deepbore",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "medallion",
            "Singular": "Medallion",
            "Plural": "Medallion",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "darkscience",
            "Singular": "Dark Science",
            "Plural": "Dark Science",
            "CurrencyCode": "SC",
            "Resettable": false,
            "SharedData": false
        },
        {
            "Id": "comrade",
            "Singular": "Comrade",
            "Plural": "Comrades",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "comradegenerator",
            "Singular": "Comrade",
            "Plural": "Comrades",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "gold",
            "Singular": "Gold",
            "Plural": "Gold",
            "CurrencyCode": "GO",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "trophy",
            "Singular": "Trophy",
            "Plural": "Trophies",
            "StartingQty": 0,
            "Resettable": false,
            "SharedData": false
        },
        {
            "Id": "timehack_1",
            "Singular": "Basic Warp",
            "Plural": "Basic Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "timehack_4",
            "Singular": "Super Warp",
            "Plural": "Super Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "timehack_24",
            "Singular": "Elite Warp",
            "Plural": "Elite Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "specops_point",
            "Singular": "SpecialOps Point",
            "Plural": "SpecialOps Points",
            "StartingQty": 0,
            "Resettable": false,
            "SharedData": false
        },
        {
            "Id": "scientist",
            "Singular": "Science",
            "Plural": "Science",
            "Resettable": false,
            "SharedData": false
        }
    ],
    "Segments": [
        {
            "Id": "LteSegment",
            "Priority": 1,
            "Triggers": [
                {
                    "Type": "Rank",
                    "Operator": ">=",
                    "Value": 1
                }
            ]
        }
    ],
    "Store": [
        {
            "Name": "Bit O'Gold",
            "InternalId": "t02_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 199,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 160,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold1\"}"
        },
        {
            "Name": "Lot O'Gold",
            "InternalId": "t05_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 499,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 500,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold2\"}"
        },
        {
            "Name": "Tonne O'Gold",
            "InternalId": "t10_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 1200,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold3\",\"popular\":\"true\"}"
        },
        {
            "Name": "Bucket O'Gold",
            "InternalId": "t20_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 1999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 2500,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold4\"}"
        },
        {
            "Name": "Barrel O'Gold",
            "InternalId": "t50_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 4999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 6500,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold5\"}"
        },
        {
            "Name": "Wheels O'Gold",
            "InternalId": "t60_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 9999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 14000,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold6\",\"bestValue\":\"true\"}"
        },
        {
            "Name": "Discovery Pack",
            "InternalId": "darkscience_1000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 50,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 1000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science1\",\"topUp\":\"true\"}"
        },
        {
            "Name": "Wise Pack",
            "InternalId": "darkscience_5000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 200,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 5000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science2\"}"
        },
        {
            "Name": "Brilliant Pack",
            "InternalId": "darkscience_25000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 800,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 25000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science3\",\"bestValue\":\"true\"}"
        },
        {
            "Name": "Titanium Capsule",
            "InternalId": "gacha_titanium",
            "ItemClass": "Gacha",
            "Price": 750,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Gacha",
                    "Value": 1,
                    "RewardId": "titanium"
                }
            ],
            "CustomData": "{\"icon\":\"ga-titanium\"}"
        },
        {
            "Name": "Skip 1 Hour!",
            "InternalId": "timehack_1",
            "ItemClass": "Experiment",
            "Price": 50,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX167"
                }
            ],
            "CustomData": "{\"rarity\":\"Rare\"}"
        },
        {
            "Name": "Skip 4 Hours!",
            "InternalId": "timehack_4",
            "ItemClass": "Experiment",
            "Price": 150,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX164"
                }
            ],
            "CustomData": "{\"rarity\":\"Epic\"}"
        },
        {
            "Name": "Skip 1 Day!",
            "InternalId": "timehack_24",
            "ItemClass": "Experiment",
            "Price": 750,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX165"
                }
            ],
            "CustomData": "{\"rarity\":\"Supreme\"}"
        },
        {
            "Name": "Event Starter Pack",
            "InternalId": "t07_lte_starter",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 699,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Gacha",
                    "Value": 1,
                    "RewardId": "titanium"
                },
                {
                    "Reward": "Resources",
                    "Value": 100,
                    "RewardId": "gold"
                },
                {
                    "Reward": "Resources",
                    "Value": 2500,
                    "RewardId": "darkscience"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 4 Bundle",
            "InternalId": "t04_lte_rank4",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 399,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Researcher",
                    "Value": 15,
                    "RewardId": "FUS064"
                },
                {
                    "Reward": "Researcher",
                    "Value": 100,
                    "RewardId": "FUS046"
                },
                {
                    "Reward": "Resources",
                    "Value": 1000,
                    "RewardId": "darkscience"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 7 Bundle",
            "InternalId": "t05_lte_rank7",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 499,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Researcher",
                    "Value": 20,
                    "RewardId": "FUS063"
                },
                {
                    "Reward": "Researcher",
                    "Value": 200,
                    "RewardId": "FUS050"
                },
                {
                    "Reward": "Resources",
                    "Value": 2000,
                    "RewardId": "darkscience"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 10 Bundle",
            "InternalId": "t08_lte_rank10",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 599,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Researcher",
                    "Value": 30,
                    "RewardId": "FUS069"
                },
                {
                    "Reward": "Researcher",
                    "Value": 300,
                    "RewardId": "FUS009"
                },
                {
                    "Reward": "Resources",
                    "Value": 3000,
                    "RewardId": "darkscience"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 13 Bundle",
            "InternalId": "t09_lte_rank13",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 799,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Researcher",
                    "Value": 50,
                    "RewardId": "FUS066"
                },
                {
                    "Reward": "Researcher",
                    "Value": 400,
                    "RewardId": "FUS011"
                },
                {
                    "Reward": "Resources",
                    "Value": 4000,
                    "RewardId": "darkscience"
                },
                {
                    "Reward": "Resources",
                    "Value": 2,
                    "RewardId": "timehack_1"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 16 Bundle",
            "InternalId": "t10_lte_rank16",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 899,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Researcher",
                    "Value": 100,
                    "RewardId": "FUS068"
                },
                {
                    "Reward": "Researcher",
                    "Value": 500,
                    "RewardId": "FUS059"
                },
                {
                    "Reward": "Resources",
                    "Value": 6000,
                    "RewardId": "darkscience"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 19 Bundle",
            "InternalId": "t09_lte_rank19",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 899,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Gacha",
                    "Value": 1,
                    "RewardId": "tech"
                },
                {
                    "Reward": "Resources",
                    "Value": 2,
                    "RewardId": "timehack_4"
                },
                {
                    "Reward": "Researcher",
                    "Value": 500,
                    "RewardId": "FUS060"
                },
                {
                    "Reward": "Resources",
                    "Value": 6000,
                    "RewardId": "darkscience"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        },
        {
            "Name": "Event Rank 20 Bundle",
            "InternalId": "t15_lte_rank20",
            "ItemClass": "VirtualCurrencyBundle",
            "Price": 1499,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase",
                "Bundle"
            ],
            "Rewards": [
                {
                    "Reward": "Gacha",
                    "Value": 2,
                    "RewardId": "tech"
                },
                {
                    "Reward": "Resources",
                    "Value": 250,
                    "RewardId": "gold"
                },
                {
                    "Reward": "Resources",
                    "Value": 10000,
                    "RewardId": "darkscience"
                },
                {
                    "Reward": "Resources",
                    "Value": 1,
                    "RewardId": "timehack_24"
                }
            ],
            "BundleTheme": "fusioninnovation",
            "CustomData": "{\"icon\":\"vc-ftb\"}"
        }
    ],
    "SupremePassConfig": {
        "NumExtraFreeGachaCapsule": 2,
        "PropagandaAdsRemoved": true,
        "SpecOpsTimeReduction": 4,
        "NumExtraSpecOpsSlots": 1,
        "NumPerks": 6,
        "SupremePassStoreItemId": "t10_supremepass",
        "PurchaseTierCost": 250
    },
    "Trades": [
        {
            "Resource": "maize",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 1,
            "MaxLevel": 249
        },
        {
            "Resource": "tool",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 2,
            "MaxLevel": 249
        },
        {
            "Resource": "ore",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 3,
            "MaxLevel": 249
        },
        {
            "Resource": "medicine",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 4,
            "MaxLevel": 249
        }
    ]
}
