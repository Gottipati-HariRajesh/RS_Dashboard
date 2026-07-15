import React, { useState, useMemo } from "react";
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, BarChart, Cell
} from "recharts";
import { Radio, TrendingUp, MessageSquare, Zap, Search, HelpCircle } from "lucide-react";

/* ====== DATA ====== */
const DASHBOARD_DATA = {
  "generated_at": "2026-07-15T08:58:32.591932",
  "total_posts_analyzed": 400,
  "games": [
    "Marvel Rivals",
    "Once Human",
    "PUBG Mobile",
    "Where Winds Meet",
    "World of Warcraft"
  ],
  "daily_trend": [
    {
      "game": "Once Human",
      "date": "2026-05-15",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-16",
      "volume": 1,
      "avg_sentiment": 0.906
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-16",
      "volume": 3,
      "avg_sentiment": 0.369
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-17",
      "volume": 1,
      "avg_sentiment": 0.49
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-17",
      "volume": 2,
      "avg_sentiment": 0.806
    },
    {
      "game": "Once Human",
      "date": "2026-05-17",
      "volume": 2,
      "avg_sentiment": 0.309
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-17",
      "volume": 1,
      "avg_sentiment": 0.459
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-18",
      "volume": 2,
      "avg_sentiment": 0.593
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-18",
      "volume": 2,
      "avg_sentiment": 0.132
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-19",
      "volume": 1,
      "avg_sentiment": 0.226
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-19",
      "volume": 2,
      "avg_sentiment": 0.535
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-19",
      "volume": 2,
      "avg_sentiment": 0.245
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-20",
      "volume": 2,
      "avg_sentiment": 0.309
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-20",
      "volume": 2,
      "avg_sentiment": -0.191
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-20",
      "volume": 1,
      "avg_sentiment": -0.226
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-20",
      "volume": 1,
      "avg_sentiment": 0.906
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-21",
      "volume": 1,
      "avg_sentiment": 0.612
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-21",
      "volume": 1,
      "avg_sentiment": 0.612
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-21",
      "volume": 2,
      "avg_sentiment": 0.194
    },
    {
      "game": "Once Human",
      "date": "2026-05-21",
      "volume": 1,
      "avg_sentiment": 0.66
    },
    {
      "game": "Once Human",
      "date": "2026-05-22",
      "volume": 2,
      "avg_sentiment": 0.859
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-22",
      "volume": 3,
      "avg_sentiment": 0.351
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-22",
      "volume": 2,
      "avg_sentiment": 0.659
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-22",
      "volume": 2,
      "avg_sentiment": 0.531
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-23",
      "volume": 2,
      "avg_sentiment": 0.82
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-23",
      "volume": 1,
      "avg_sentiment": 0.388
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-23",
      "volume": 1,
      "avg_sentiment": -0.166
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-24",
      "volume": 1,
      "avg_sentiment": 0.784
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-24",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-24",
      "volume": 1,
      "avg_sentiment": 0.827
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-24",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-25",
      "volume": 1,
      "avg_sentiment": 0.388
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-25",
      "volume": 3,
      "avg_sentiment": 0.507
    },
    {
      "game": "Once Human",
      "date": "2026-05-25",
      "volume": 4,
      "avg_sentiment": 0.109
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-25",
      "volume": 2,
      "avg_sentiment": -0.44
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-26",
      "volume": 4,
      "avg_sentiment": 0.281
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-26",
      "volume": 2,
      "avg_sentiment": 0.585
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-26",
      "volume": 1,
      "avg_sentiment": 0.612
    },
    {
      "game": "Once Human",
      "date": "2026-05-26",
      "volume": 2,
      "avg_sentiment": 0.73
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-27",
      "volume": 3,
      "avg_sentiment": 0.595
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-27",
      "volume": 3,
      "avg_sentiment": 0.404
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-27",
      "volume": 2,
      "avg_sentiment": 0.822
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-28",
      "volume": 2,
      "avg_sentiment": 0.542
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-28",
      "volume": 2,
      "avg_sentiment": 0.194
    },
    {
      "game": "Once Human",
      "date": "2026-05-28",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-29",
      "volume": 3,
      "avg_sentiment": 0.466
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-29",
      "volume": 3,
      "avg_sentiment": 0.754
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-29",
      "volume": 3,
      "avg_sentiment": 0.222
    },
    {
      "game": "Once Human",
      "date": "2026-05-29",
      "volume": 1,
      "avg_sentiment": 0.751
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-29",
      "volume": 1,
      "avg_sentiment": 0.49
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-30",
      "volume": 2,
      "avg_sentiment": 0.306
    },
    {
      "game": "Once Human",
      "date": "2026-05-31",
      "volume": 2,
      "avg_sentiment": -0.075
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-05-31",
      "volume": 1,
      "avg_sentiment": -0.166
    },
    {
      "game": "Once Human",
      "date": "2026-06-01",
      "volume": 2,
      "avg_sentiment": -0.113
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-01",
      "volume": 2,
      "avg_sentiment": 0.392
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-01",
      "volume": 5,
      "avg_sentiment": 0.263
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-01",
      "volume": 1,
      "avg_sentiment": 0.765
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-02",
      "volume": 3,
      "avg_sentiment": 0.406
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-02",
      "volume": 2,
      "avg_sentiment": 0.763
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-02",
      "volume": 2,
      "avg_sentiment": 0.21
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-02",
      "volume": 2,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-03",
      "volume": 2,
      "avg_sentiment": 0.784
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-03",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-03",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Once Human",
      "date": "2026-06-03",
      "volume": 1,
      "avg_sentiment": 0.49
    },
    {
      "game": "Once Human",
      "date": "2026-06-04",
      "volume": 3,
      "avg_sentiment": 0.58
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-04",
      "volume": 2,
      "avg_sentiment": 0.206
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-05",
      "volume": 3,
      "avg_sentiment": -0.281
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-05",
      "volume": 3,
      "avg_sentiment": 0.017
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-05",
      "volume": 1,
      "avg_sentiment": 0.388
    },
    {
      "game": "Once Human",
      "date": "2026-06-05",
      "volume": 1,
      "avg_sentiment": -0.382
    },
    {
      "game": "Once Human",
      "date": "2026-06-06",
      "volume": 1,
      "avg_sentiment": 0.226
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-06",
      "volume": 4,
      "avg_sentiment": 0.477
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-06",
      "volume": 1,
      "avg_sentiment": -0.151
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-06",
      "volume": 2,
      "avg_sentiment": 0.745
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-06",
      "volume": 1,
      "avg_sentiment": 0.459
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-07",
      "volume": 2,
      "avg_sentiment": -0.113
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-07",
      "volume": 2,
      "avg_sentiment": 0.306
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-07",
      "volume": 3,
      "avg_sentiment": 0.227
    },
    {
      "game": "Once Human",
      "date": "2026-06-07",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-08",
      "volume": 2,
      "avg_sentiment": 0.564
    },
    {
      "game": "Once Human",
      "date": "2026-06-08",
      "volume": 2,
      "avg_sentiment": 0.113
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-08",
      "volume": 1,
      "avg_sentiment": 0.586
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-08",
      "volume": 2,
      "avg_sentiment": 0.734
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-08",
      "volume": 1,
      "avg_sentiment": 0.226
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-09",
      "volume": 1,
      "avg_sentiment": -0.151
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-09",
      "volume": 3,
      "avg_sentiment": 0.408
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-09",
      "volume": 1,
      "avg_sentiment": 0.586
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-10",
      "volume": 3,
      "avg_sentiment": 0.348
    },
    {
      "game": "Once Human",
      "date": "2026-06-10",
      "volume": 2,
      "avg_sentiment": 0.135
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-10",
      "volume": 3,
      "avg_sentiment": 0.376
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-10",
      "volume": 2,
      "avg_sentiment": 0.22
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-11",
      "volume": 3,
      "avg_sentiment": 0.379
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-11",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-12",
      "volume": 2,
      "avg_sentiment": 0.593
    },
    {
      "game": "Once Human",
      "date": "2026-06-12",
      "volume": 6,
      "avg_sentiment": 0.255
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-13",
      "volume": 4,
      "avg_sentiment": 0.368
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-13",
      "volume": 2,
      "avg_sentiment": 0.232
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-13",
      "volume": 2,
      "avg_sentiment": 0.49
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-14",
      "volume": 2,
      "avg_sentiment": 0.586
    },
    {
      "game": "Once Human",
      "date": "2026-06-14",
      "volume": 2,
      "avg_sentiment": 0.355
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-14",
      "volume": 1,
      "avg_sentiment": 0.751
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-14",
      "volume": 2,
      "avg_sentiment": 0.732
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-15",
      "volume": 2,
      "avg_sentiment": 0.263
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-15",
      "volume": 4,
      "avg_sentiment": 0.524
    },
    {
      "game": "Once Human",
      "date": "2026-06-15",
      "volume": 1,
      "avg_sentiment": 0.637
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-15",
      "volume": 3,
      "avg_sentiment": 0.437
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-15",
      "volume": 1,
      "avg_sentiment": 0.784
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-16",
      "volume": 3,
      "avg_sentiment": 0.685
    },
    {
      "game": "Once Human",
      "date": "2026-06-16",
      "volume": 3,
      "avg_sentiment": 0.523
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-16",
      "volume": 3,
      "avg_sentiment": 0.037
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-16",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-16",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-17",
      "volume": 4,
      "avg_sentiment": 0.06
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-17",
      "volume": 2,
      "avg_sentiment": 0.813
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-17",
      "volume": 3,
      "avg_sentiment": -0.038
    },
    {
      "game": "Once Human",
      "date": "2026-06-17",
      "volume": 1,
      "avg_sentiment": 0.459
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-18",
      "volume": 1,
      "avg_sentiment": -0.166
    },
    {
      "game": "Once Human",
      "date": "2026-06-18",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-18",
      "volume": 3,
      "avg_sentiment": 0.32
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-19",
      "volume": 1,
      "avg_sentiment": 0.859
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-19",
      "volume": 1,
      "avg_sentiment": 0.421
    },
    {
      "game": "Once Human",
      "date": "2026-06-19",
      "volume": 1,
      "avg_sentiment": -0.382
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-19",
      "volume": 3,
      "avg_sentiment": -0.127
    },
    {
      "game": "Once Human",
      "date": "2026-06-20",
      "volume": 3,
      "avg_sentiment": 0.36
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-20",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-21",
      "volume": 3,
      "avg_sentiment": 0.7
    },
    {
      "game": "Once Human",
      "date": "2026-06-21",
      "volume": 2,
      "avg_sentiment": 0.414
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-22",
      "volume": 2,
      "avg_sentiment": 0.612
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-22",
      "volume": 4,
      "avg_sentiment": 0.067
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-22",
      "volume": 1,
      "avg_sentiment": 0.612
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-22",
      "volume": 2,
      "avg_sentiment": 0.388
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-23",
      "volume": 2,
      "avg_sentiment": 0.058
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-23",
      "volume": 1,
      "avg_sentiment": 0.49
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-23",
      "volume": 1,
      "avg_sentiment": 0.612
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-24",
      "volume": 1,
      "avg_sentiment": 0.064
    },
    {
      "game": "Once Human",
      "date": "2026-06-24",
      "volume": 1,
      "avg_sentiment": 0.459
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-24",
      "volume": 2,
      "avg_sentiment": 0.025
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-25",
      "volume": 2,
      "avg_sentiment": 0.496
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-25",
      "volume": 5,
      "avg_sentiment": 0.588
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-25",
      "volume": 1,
      "avg_sentiment": -0.166
    },
    {
      "game": "Once Human",
      "date": "2026-06-25",
      "volume": 2,
      "avg_sentiment": 0.319
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-25",
      "volume": 1,
      "avg_sentiment": 0.49
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-26",
      "volume": 1,
      "avg_sentiment": 0.421
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-26",
      "volume": 3,
      "avg_sentiment": 0.316
    },
    {
      "game": "Once Human",
      "date": "2026-06-26",
      "volume": 1,
      "avg_sentiment": -0.421
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-27",
      "volume": 2,
      "avg_sentiment": -0.196
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-27",
      "volume": 1,
      "avg_sentiment": -0.382
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-27",
      "volume": 2,
      "avg_sentiment": 0.18
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-27",
      "volume": 1,
      "avg_sentiment": -0.226
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-28",
      "volume": 3,
      "avg_sentiment": 0.358
    },
    {
      "game": "Once Human",
      "date": "2026-06-28",
      "volume": 2,
      "avg_sentiment": 0.419
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-28",
      "volume": 2,
      "avg_sentiment": 0.081
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-28",
      "volume": 1,
      "avg_sentiment": 0.778
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-29",
      "volume": 2,
      "avg_sentiment": 0.698
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-29",
      "volume": 1,
      "avg_sentiment": 0.848
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-29",
      "volume": 1,
      "avg_sentiment": -0.151
    },
    {
      "game": "Once Human",
      "date": "2026-06-29",
      "volume": 1,
      "avg_sentiment": -0.382
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-30",
      "volume": 4,
      "avg_sentiment": 0.449
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-30",
      "volume": 3,
      "avg_sentiment": 0.456
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-30",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-30",
      "volume": 1,
      "avg_sentiment": 0.802
    },
    {
      "game": "Once Human",
      "date": "2026-07-01",
      "volume": 2,
      "avg_sentiment": 0.242
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-01",
      "volume": 1,
      "avg_sentiment": 0.784
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-01",
      "volume": 1,
      "avg_sentiment": 0.637
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-01",
      "volume": 1,
      "avg_sentiment": 0.421
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-02",
      "volume": 3,
      "avg_sentiment": 0.299
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-02",
      "volume": 1,
      "avg_sentiment": 0.751
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-02",
      "volume": 1,
      "avg_sentiment": 0.226
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-03",
      "volume": 2,
      "avg_sentiment": 0.03
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-03",
      "volume": 2,
      "avg_sentiment": 0.636
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-03",
      "volume": 3,
      "avg_sentiment": 0.636
    },
    {
      "game": "Once Human",
      "date": "2026-07-03",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-04",
      "volume": 3,
      "avg_sentiment": -0.011
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-04",
      "volume": 2,
      "avg_sentiment": 0.293
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-04",
      "volume": 2,
      "avg_sentiment": 0.734
    },
    {
      "game": "Once Human",
      "date": "2026-07-04",
      "volume": 1,
      "avg_sentiment": 0.859
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-04",
      "volume": 2,
      "avg_sentiment": 0.376
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-05",
      "volume": 2,
      "avg_sentiment": 0.73
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-05",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Once Human",
      "date": "2026-07-05",
      "volume": 3,
      "avg_sentiment": 0.267
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-06",
      "volume": 1,
      "avg_sentiment": 0.784
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-06",
      "volume": 2,
      "avg_sentiment": 0.736
    },
    {
      "game": "Once Human",
      "date": "2026-07-06",
      "volume": 1,
      "avg_sentiment": 0.586
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-07",
      "volume": 1,
      "avg_sentiment": 0.421
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-07",
      "volume": 1,
      "avg_sentiment": 0.71
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-07",
      "volume": 1,
      "avg_sentiment": 0.784
    },
    {
      "game": "Once Human",
      "date": "2026-07-07",
      "volume": 1,
      "avg_sentiment": -0.382
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-08",
      "volume": 2,
      "avg_sentiment": 0.778
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-08",
      "volume": 4,
      "avg_sentiment": 0.437
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-08",
      "volume": 2,
      "avg_sentiment": 0.223
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-08",
      "volume": 1,
      "avg_sentiment": -0.421
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-09",
      "volume": 2,
      "avg_sentiment": 0.0
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-09",
      "volume": 1,
      "avg_sentiment": 0.612
    },
    {
      "game": "Once Human",
      "date": "2026-07-10",
      "volume": 1,
      "avg_sentiment": 0.66
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-10",
      "volume": 1,
      "avg_sentiment": 0.751
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-10",
      "volume": 1,
      "avg_sentiment": 0.459
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-10",
      "volume": 1,
      "avg_sentiment": 0.71
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-11",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-11",
      "volume": 2,
      "avg_sentiment": -0.303
    },
    {
      "game": "Once Human",
      "date": "2026-07-12",
      "volume": 2,
      "avg_sentiment": 0.681
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-12",
      "volume": 3,
      "avg_sentiment": 0.408
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-12",
      "volume": 1,
      "avg_sentiment": 0.421
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-12",
      "volume": 3,
      "avg_sentiment": 0.204
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-12",
      "volume": 1,
      "avg_sentiment": 0.586
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-13",
      "volume": 1,
      "avg_sentiment": 0.751
    },
    {
      "game": "Once Human",
      "date": "2026-07-13",
      "volume": 2,
      "avg_sentiment": 0.599
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-13",
      "volume": 1,
      "avg_sentiment": 0.421
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-13",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-07-14",
      "volume": 1,
      "avg_sentiment": 0.778
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-14",
      "volume": 2,
      "avg_sentiment": 0.575
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-07-14",
      "volume": 3,
      "avg_sentiment": 0.666
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-14",
      "volume": 1,
      "avg_sentiment": 0.0
    },
    {
      "game": "Once Human",
      "date": "2026-07-14",
      "volume": 1,
      "avg_sentiment": 0.784
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-15",
      "volume": 1,
      "avg_sentiment": 0.586
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-15",
      "volume": 2,
      "avg_sentiment": -0.159
    }
  ],
  "theme_breakdown": {
    "World of Warcraft": [
      {
        "theme": "Balance / PvP",
        "count": 31
      },
      {
        "theme": "New Content",
        "count": 14
      },
      {
        "theme": "Monetization",
        "count": 12
      },
      {
        "theme": "Community / Nostalgia",
        "count": 9
      },
      {
        "theme": "Questions / Help",
        "count": 6
      },
      {
        "theme": "Bugs / Technical",
        "count": 5
      },
      {
        "theme": "General Discussion",
        "count": 3
      }
    ],
    "Where Winds Meet": [
      {
        "theme": "Balance / PvP",
        "count": 37
      },
      {
        "theme": "New Content",
        "count": 20
      },
      {
        "theme": "Community / Nostalgia",
        "count": 12
      },
      {
        "theme": "Monetization",
        "count": 10
      },
      {
        "theme": "Bugs / Technical",
        "count": 6
      },
      {
        "theme": "Questions / Help",
        "count": 5
      },
      {
        "theme": "General Discussion",
        "count": 5
      }
    ],
    "Once Human": [
      {
        "theme": "Balance / PvP",
        "count": 25
      },
      {
        "theme": "Monetization",
        "count": 13
      },
      {
        "theme": "New Content",
        "count": 7
      },
      {
        "theme": "Bugs / Technical",
        "count": 7
      },
      {
        "theme": "Community / Nostalgia",
        "count": 7
      },
      {
        "theme": "Questions / Help",
        "count": 7
      },
      {
        "theme": "General Discussion",
        "count": 5
      }
    ],
    "Marvel Rivals": [
      {
        "theme": "Balance / PvP",
        "count": 21
      },
      {
        "theme": "New Content",
        "count": 15
      },
      {
        "theme": "Monetization",
        "count": 9
      },
      {
        "theme": "Community / Nostalgia",
        "count": 8
      },
      {
        "theme": "General Discussion",
        "count": 7
      },
      {
        "theme": "Bugs / Technical",
        "count": 7
      },
      {
        "theme": "Questions / Help",
        "count": 5
      }
    ],
    "PUBG Mobile": [
      {
        "theme": "Balance / PvP",
        "count": 21
      },
      {
        "theme": "Community / Nostalgia",
        "count": 18
      },
      {
        "theme": "New Content",
        "count": 16
      },
      {
        "theme": "Monetization",
        "count": 11
      },
      {
        "theme": "General Discussion",
        "count": 6
      },
      {
        "theme": "Bugs / Technical",
        "count": 5
      },
      {
        "theme": "Questions / Help",
        "count": 5
      }
    ]
  },
  "sentiment_split": {
    "World of Warcraft": {
      "positive": 43,
      "neutral": 15,
      "negative": 22
    },
    "Where Winds Meet": {
      "positive": 58,
      "neutral": 20,
      "negative": 17
    },
    "Once Human": {
      "positive": 42,
      "neutral": 13,
      "negative": 16
    },
    "Marvel Rivals": {
      "positive": 69,
      "neutral": 1,
      "negative": 2
    },
    "PUBG Mobile": {
      "positive": 52,
      "neutral": 13,
      "negative": 17
    }
  },
  "top_questions": [
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Where Winds Meet? Confusing",
      "engagement": 3746,
      "date": "2026-06-28",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 3500,
      "date": "2026-05-18",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 3220,
      "date": "2026-06-15",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Once Human? Confusing",
      "engagement": 3196,
      "date": "2026-07-05",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Where Winds Meet right now?",
      "engagement": 3140,
      "date": "2026-06-08",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in PUBG Mobile right now?",
      "engagement": 3094,
      "date": "2026-06-15",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 2975,
      "date": "2026-05-20",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in PUBG Mobile? Confusing",
      "engagement": 2851,
      "date": "2026-06-04",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Marvel Rivals right now?",
      "engagement": 2473,
      "date": "2026-07-08",
      "sentiment_compound": 0.791,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Once Human right now?",
      "engagement": 2464,
      "date": "2026-06-25",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Where Winds Meet? Confusing",
      "engagement": 2448,
      "date": "2026-06-17",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Once Human right now?",
      "engagement": 2227,
      "date": "2026-06-15",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Where Winds Meet right now?",
      "engagement": 2129,
      "date": "2026-07-01",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 2084,
      "date": "2026-06-07",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in PUBG Mobile? Confusing",
      "engagement": 1961,
      "date": "2026-07-08",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    }
  ],
  "top_posts": [
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 3995,
      "date": "2026-06-23",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Once Human crashed on me twice tonight, frustrating during ranked",
      "engagement": 3982,
      "date": "2026-06-10",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in World of Warcraft today, balance actually felt fair for once",
      "engagement": 3964,
      "date": "2026-06-30",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "Just finished the new PUBG Mobile content drop, the story beats were great",
      "engagement": 3959,
      "date": "2026-06-07",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Where Winds Meet before next season",
      "engagement": 3953,
      "date": "2026-07-14",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Honestly the Once Human shop rotation this week had some great value skins",
      "engagement": 3901,
      "date": "2026-05-22",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in PUBG Mobile before next season",
      "engagement": 3894,
      "date": "2026-06-09",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "The new zone/map in World of Warcraft is gorgeous, spent an hour just exploring",
      "engagement": 3892,
      "date": "2026-05-21",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 3890,
      "date": "2026-06-03",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 3890,
      "date": "2026-06-07",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "The meta in Once Human right now is so one-sided, matches are over in minutes",
      "engagement": 3888,
      "date": "2026-06-01",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 3880,
      "date": "2026-07-12",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "Been playing Where Winds Meet since launch, still amazes me how the community has grown",
      "engagement": 3875,
      "date": "2026-05-19",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Once Human feels steep compared to last season",
      "engagement": 3872,
      "date": "2026-06-29",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 3869,
      "date": "2026-06-01",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "World of Warcraft's new event is fun but way too short for how much was teased",
      "engagement": 3866,
      "date": "2026-06-27",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 3838,
      "date": "2026-06-30",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "The meta in PUBG Mobile right now is so one-sided, matches are over in minutes",
      "engagement": 3834,
      "date": "2026-05-19",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Why does Once Human keep pushing bundles right after a content drought",
      "engagement": 3832,
      "date": "2026-05-25",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "Is PUBG Mobile worth getting into in 2026 or is the playerbase dying?",
      "engagement": 3829,
      "date": "2026-06-08",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    }
  ],
  "volume_spikes": [
    {
      "game": "World of Warcraft",
      "date": "2026-05-16",
      "volume": 3,
      "avg_sentiment": 0.369
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-25",
      "volume": 3,
      "avg_sentiment": 0.507
    },
    {
      "game": "Once Human",
      "date": "2026-05-25",
      "volume": 4,
      "avg_sentiment": 0.109
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-05-26",
      "volume": 4,
      "avg_sentiment": 0.281
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-27",
      "volume": 3,
      "avg_sentiment": 0.595
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-27",
      "volume": 3,
      "avg_sentiment": 0.404
    },
    {
      "game": "World of Warcraft",
      "date": "2026-05-29",
      "volume": 3,
      "avg_sentiment": 0.466
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-05-29",
      "volume": 3,
      "avg_sentiment": 0.754
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-01",
      "volume": 5,
      "avg_sentiment": 0.263
    },
    {
      "game": "Once Human",
      "date": "2026-06-04",
      "volume": 3,
      "avg_sentiment": 0.58
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-05",
      "volume": 3,
      "avg_sentiment": 0.017
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-06",
      "volume": 4,
      "avg_sentiment": 0.477
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-07",
      "volume": 3,
      "avg_sentiment": 0.227
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-09",
      "volume": 3,
      "avg_sentiment": 0.408
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-10",
      "volume": 3,
      "avg_sentiment": 0.376
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-11",
      "volume": 3,
      "avg_sentiment": 0.379
    },
    {
      "game": "Once Human",
      "date": "2026-06-12",
      "volume": 6,
      "avg_sentiment": 0.255
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-13",
      "volume": 4,
      "avg_sentiment": 0.368
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-15",
      "volume": 4,
      "avg_sentiment": 0.524
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-15",
      "volume": 3,
      "avg_sentiment": 0.437
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-16",
      "volume": 3,
      "avg_sentiment": 0.685
    },
    {
      "game": "Once Human",
      "date": "2026-06-16",
      "volume": 3,
      "avg_sentiment": 0.523
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-16",
      "volume": 3,
      "avg_sentiment": 0.037
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-17",
      "volume": 4,
      "avg_sentiment": 0.06
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-17",
      "volume": 3,
      "avg_sentiment": -0.038
    },
    {
      "game": "Marvel Rivals",
      "date": "2026-06-18",
      "volume": 3,
      "avg_sentiment": 0.32
    },
    {
      "game": "Once Human",
      "date": "2026-06-20",
      "volume": 3,
      "avg_sentiment": 0.36
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-22",
      "volume": 4,
      "avg_sentiment": 0.067
    },
    {
      "game": "Where Winds Meet",
      "date": "2026-06-25",
      "volume": 5,
      "avg_sentiment": 0.588
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-06-28",
      "volume": 3,
      "avg_sentiment": 0.358
    },
    {
      "game": "World of Warcraft",
      "date": "2026-06-30",
      "volume": 4,
      "avg_sentiment": 0.449
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-03",
      "volume": 3,
      "avg_sentiment": 0.636
    },
    {
      "game": "World of Warcraft",
      "date": "2026-07-04",
      "volume": 3,
      "avg_sentiment": -0.011
    },
    {
      "game": "Once Human",
      "date": "2026-07-05",
      "volume": 3,
      "avg_sentiment": 0.267
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-08",
      "volume": 4,
      "avg_sentiment": 0.437
    },
    {
      "game": "PUBG Mobile",
      "date": "2026-07-12",
      "volume": 3,
      "avg_sentiment": 0.408
    }
  ],
  "raw_posts": [
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in World of Warcraft before next season",
      "engagement": 576,
      "date": "2026-05-29",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 388,
      "date": "2026-07-02",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "The meta in Where Winds Meet right now is so one-sided, matches are over in minutes",
      "engagement": 2877,
      "date": "2026-06-10",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "New Content",
      "text": "Getting constant disconnects in Once Human since the last patch, anyone else?",
      "engagement": 658,
      "date": "2026-05-31",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 1561,
      "date": "2026-07-08",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 2201,
      "date": "2026-07-07",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Why does Where Winds Meet keep pushing bundles right after a content drought",
      "engagement": 2890,
      "date": "2026-07-11",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 3554,
      "date": "2026-07-08",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Performance in Once Human improved a lot after today's hotfix, nice to see",
      "engagement": 1460,
      "date": "2026-07-01",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in World of Warcraft, reported it but no fix yet",
      "engagement": 1007,
      "date": "2026-07-04",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "Is Marvel Rivals worth getting into in 2026 or is the playerbase dying?",
      "engagement": 3457,
      "date": "2026-05-27",
      "sentiment_compound": 0.572,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "The World of Warcraft community event this weekend brought back so many good memories",
      "engagement": 869,
      "date": "2026-05-17",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Honestly the Marvel Rivals shop rotation this week had some great value skins",
      "engagement": 3750,
      "date": "2026-06-03",
      "sentiment_compound": 0.906,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 1759,
      "date": "2026-05-18",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Marvel Rivals, at least none of it is pay-to-win",
      "engagement": 377,
      "date": "2026-05-28",
      "sentiment_compound": 0.663,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 1734,
      "date": "2026-06-07",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Once Human crashed on me twice tonight, frustrating during ranked",
      "engagement": 3982,
      "date": "2026-06-10",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Bugs / Technical",
      "text": "Performance in World of Warcraft improved a lot after today's hotfix, nice to see",
      "engagement": 1398,
      "date": "2026-07-07",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 3125,
      "date": "2026-07-03",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 2084,
      "date": "2026-06-07",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "Been playing Marvel Rivals since launch, still amazes me how the community has grown",
      "engagement": 2006,
      "date": "2026-07-14",
      "sentiment_compound": 0.778,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Marvel Rivals? Confusing",
      "engagement": 991,
      "date": "2026-05-19",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "Been playing World of Warcraft since launch, still amazes me how the community has grown",
      "engagement": 2186,
      "date": "2026-05-27",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "General Discussion",
      "text": "Is Once Human worth getting into in 2026 or is the playerbase dying?",
      "engagement": 3578,
      "date": "2026-06-06",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Where Winds Meet pro play is going viral, absolutely insane outplay",
      "engagement": 1639,
      "date": "2026-06-02",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Once Human on for lower ping in Europe?",
      "engagement": 925,
      "date": "2026-07-10",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in Where Winds Meet, reported it but no fix yet",
      "engagement": 2904,
      "date": "2026-06-05",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 979,
      "date": "2026-06-27",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in PUBG Mobile, easily the best update in a year",
      "engagement": 1942,
      "date": "2026-05-24",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in World of Warcraft today, balance actually felt fair for once",
      "engagement": 1688,
      "date": "2026-06-15",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in World of Warcraft before next season",
      "engagement": 452,
      "date": "2026-06-30",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Where Winds Meet, easily the best update in a year",
      "engagement": 1899,
      "date": "2026-06-30",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 3799,
      "date": "2026-05-28",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "New Content",
      "text": "The new zone/map in Once Human is gorgeous, spent an hour just exploring",
      "engagement": 3701,
      "date": "2026-07-12",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 3220,
      "date": "2026-06-15",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Where Winds Meet crashed on me twice tonight, frustrating during ranked",
      "engagement": 1220,
      "date": "2026-07-02",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Where Winds Meet before next season",
      "engagement": 2397,
      "date": "2026-06-14",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 285,
      "date": "2026-06-07",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "The new zone/map in PUBG Mobile is gorgeous, spent an hour just exploring",
      "engagement": 167,
      "date": "2026-06-06",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Bugs / Technical",
      "text": "Performance in Where Winds Meet improved a lot after today's hotfix, nice to see",
      "engagement": 841,
      "date": "2026-06-02",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in PUBG Mobile, at least none of it is pay-to-win",
      "engagement": 1233,
      "date": "2026-06-15",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Anyone else think World of Warcraft's latest patch made ranked matches feel unbalanced?",
      "engagement": 878,
      "date": "2026-06-13",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "Is Marvel Rivals worth getting into in 2026 or is the playerbase dying?",
      "engagement": 651,
      "date": "2026-06-16",
      "sentiment_compound": 0.572,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 2276,
      "date": "2026-06-25",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "The new battle pass pricing in PUBG Mobile feels steep compared to last season",
      "engagement": 641,
      "date": "2026-06-27",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "This clip of a PUBG Mobile pro play is going viral, absolutely insane outplay",
      "engagement": 3498,
      "date": "2026-06-28",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Marvel Rivals right now?",
      "engagement": 1739,
      "date": "2026-05-23",
      "sentiment_compound": 0.791,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in World of Warcraft, at least none of it is pay-to-win",
      "engagement": 1077,
      "date": "2026-07-04",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "Been playing Where Winds Meet since launch, still amazes me how the community has grown",
      "engagement": 3875,
      "date": "2026-05-19",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 611,
      "date": "2026-06-18",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Just finished the new Marvel Rivals content drop, the story beats were great",
      "engagement": 865,
      "date": "2026-06-02",
      "sentiment_compound": 0.7,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in World of Warcraft, easily the best update in a year",
      "engagement": 3074,
      "date": "2026-07-06",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "Is PUBG Mobile worth getting into in 2026 or is the playerbase dying?",
      "engagement": 106,
      "date": "2026-07-03",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "The Marvel Rivals community event this weekend brought back so many good memories",
      "engagement": 3544,
      "date": "2026-05-29",
      "sentiment_compound": 0.717,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 163,
      "date": "2026-05-21",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 3365,
      "date": "2026-05-26",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "World of Warcraft crashed on me twice tonight, frustrating during ranked",
      "engagement": 3545,
      "date": "2026-07-11",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Where Winds Meet's new event is fun but way too short for how much was teased",
      "engagement": 477,
      "date": "2026-05-20",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Where Winds Meet? Confusing",
      "engagement": 2448,
      "date": "2026-06-17",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Just finished the new Marvel Rivals content drop, the story beats were great",
      "engagement": 2366,
      "date": "2026-07-03",
      "sentiment_compound": 0.7,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "The meta in Once Human right now is so one-sided, matches are over in minutes",
      "engagement": 291,
      "date": "2026-05-15",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 1235,
      "date": "2026-06-12",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Why does Once Human keep pushing bundles right after a content drought",
      "engagement": 790,
      "date": "2026-06-18",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Bugs / Technical",
      "text": "Performance in PUBG Mobile improved a lot after today's hotfix, nice to see",
      "engagement": 3419,
      "date": "2026-07-14",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 1816,
      "date": "2026-06-02",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Once Human pro play is going viral, absolutely insane outplay",
      "engagement": 1167,
      "date": "2026-06-12",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Where Winds Meet, at least none of it is pay-to-win",
      "engagement": 925,
      "date": "2026-05-25",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in World of Warcraft today, balance actually felt fair for once",
      "engagement": 3152,
      "date": "2026-07-10",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 1004,
      "date": "2026-07-05",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in World of Warcraft right now?",
      "engagement": 901,
      "date": "2026-07-03",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "The meta in Once Human right now is so one-sided, matches are over in minutes",
      "engagement": 502,
      "date": "2026-06-16",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Performance in Once Human improved a lot after today's hotfix, nice to see",
      "engagement": 3656,
      "date": "2026-06-16",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Where Winds Meet, easily the best update in a year",
      "engagement": 3051,
      "date": "2026-05-20",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "First time trying Marvel Rivals after years away, forgot how good the atmosphere is",
      "engagement": 2140,
      "date": "2026-06-13",
      "sentiment_compound": 0.691,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Marvel Rivals's new event is fun but way too short for how much was teased",
      "engagement": 1380,
      "date": "2026-06-24",
      "sentiment_compound": 0.064,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in PUBG Mobile today, balance actually felt fair for once",
      "engagement": 2898,
      "date": "2026-07-02",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Honestly the Once Human shop rotation this week had some great value skins",
      "engagement": 852,
      "date": "2026-05-22",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Where Winds Meet right now?",
      "engagement": 3140,
      "date": "2026-06-08",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 3500,
      "date": "2026-05-18",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Where Winds Meet pro play is going viral, absolutely insane outplay",
      "engagement": 1122,
      "date": "2026-06-17",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Honestly the Once Human shop rotation this week had some great value skins",
      "engagement": 3447,
      "date": "2026-06-16",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 2720,
      "date": "2026-07-14",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Once Human today, balance actually felt fair for once",
      "engagement": 1070,
      "date": "2026-06-20",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Honestly the Once Human shop rotation this week had some great value skins",
      "engagement": 3901,
      "date": "2026-05-22",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "Just finished the new World of Warcraft content drop, the story beats were great",
      "engagement": 1438,
      "date": "2026-06-30",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "This clip of a World of Warcraft pro play is going viral, absolutely insane outplay",
      "engagement": 88,
      "date": "2026-06-06",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "Just finished the new PUBG Mobile content drop, the story beats were great",
      "engagement": 897,
      "date": "2026-06-15",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Anyone else think Marvel Rivals's latest patch made ranked matches feel unbalanced?",
      "engagement": 675,
      "date": "2026-06-26",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Best server/region to play World of Warcraft on for lower ping in Europe?",
      "engagement": 2933,
      "date": "2026-07-03",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in PUBG Mobile before next season",
      "engagement": 2464,
      "date": "2026-05-25",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "General Discussion",
      "text": "First time trying Where Winds Meet after years away, forgot how good the atmosphere is",
      "engagement": 2714,
      "date": "2026-06-22",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Marvel Rivals today, balance actually felt fair for once",
      "engagement": 437,
      "date": "2026-06-17",
      "sentiment_compound": 0.848,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "The Once Human community event this weekend brought back so many good memories",
      "engagement": 2142,
      "date": "2026-06-04",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 2999,
      "date": "2026-06-08",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 1851,
      "date": "2026-06-29",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Bugs / Technical",
      "text": "Performance in Where Winds Meet improved a lot after today's hotfix, nice to see",
      "engagement": 3490,
      "date": "2026-06-25",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 3610,
      "date": "2026-06-06",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in Marvel Rivals, reported it but no fix yet",
      "engagement": 2954,
      "date": "2026-06-18",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "PUBG Mobile crashed on me twice tonight, frustrating during ranked",
      "engagement": 75,
      "date": "2026-07-09",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Performance in Once Human improved a lot after today's hotfix, nice to see",
      "engagement": 1516,
      "date": "2026-06-14",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Marvel Rivals's new event is fun but way too short for how much was teased",
      "engagement": 1863,
      "date": "2026-06-27",
      "sentiment_compound": 0.064,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "The meta in PUBG Mobile right now is so one-sided, matches are over in minutes",
      "engagement": 3047,
      "date": "2026-06-10",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Honestly the PUBG Mobile shop rotation this week had some great value skins",
      "engagement": 2419,
      "date": "2026-05-27",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "Is Marvel Rivals worth getting into in 2026 or is the playerbase dying?",
      "engagement": 1483,
      "date": "2026-07-03",
      "sentiment_compound": 0.572,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 2271,
      "date": "2026-06-26",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Anyone else think Once Human's latest patch made ranked matches feel unbalanced?",
      "engagement": 1927,
      "date": "2026-06-14",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in PUBG Mobile? Confusing",
      "engagement": 1961,
      "date": "2026-07-08",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Anyone else think Once Human's latest patch made ranked matches feel unbalanced?",
      "engagement": 3327,
      "date": "2026-06-08",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in PUBG Mobile today, balance actually felt fair for once",
      "engagement": 3243,
      "date": "2026-06-06",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Where Winds Meet, easily the best update in a year",
      "engagement": 2415,
      "date": "2026-06-17",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 856,
      "date": "2026-06-05",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 646,
      "date": "2026-07-14",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Just finished the new Where Winds Meet content drop, the story beats were great",
      "engagement": 2900,
      "date": "2026-06-26",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "The meta in Once Human right now is so one-sided, matches are over in minutes",
      "engagement": 3231,
      "date": "2026-05-25",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "The new zone/map in PUBG Mobile is gorgeous, spent an hour just exploring",
      "engagement": 3725,
      "date": "2026-06-28",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in World of Warcraft before next season",
      "engagement": 3381,
      "date": "2026-06-08",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "World of Warcraft's new event is fun but way too short for how much was teased",
      "engagement": 3866,
      "date": "2026-06-27",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "New Content",
      "text": "Just finished the new Once Human content drop, the story beats were great",
      "engagement": 3013,
      "date": "2026-06-24",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Anyone else think World of Warcraft's latest patch made ranked matches feel unbalanced?",
      "engagement": 2758,
      "date": "2026-05-24",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "This clip of a World of Warcraft pro play is going viral, absolutely insane outplay",
      "engagement": 2673,
      "date": "2026-06-17",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Where Winds Meet, easily the best update in a year",
      "engagement": 1930,
      "date": "2026-06-22",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in Marvel Rivals, reported it but no fix yet",
      "engagement": 2846,
      "date": "2026-06-13",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "Been playing Once Human since launch, still amazes me how the community has grown",
      "engagement": 1293,
      "date": "2026-06-28",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Once Human right now?",
      "engagement": 2227,
      "date": "2026-06-15",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in PUBG Mobile, easily the best update in a year",
      "engagement": 3117,
      "date": "2026-07-12",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Where Winds Meet before next season",
      "engagement": 2865,
      "date": "2026-06-14",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Where Winds Meet pro play is going viral, absolutely insane outplay",
      "engagement": 61,
      "date": "2026-06-09",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in PUBG Mobile right now?",
      "engagement": 486,
      "date": "2026-06-04",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Marvel Rivals's new event is fun but way too short for how much was teased",
      "engagement": 1981,
      "date": "2026-06-15",
      "sentiment_compound": 0.064,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "The meta in Where Winds Meet right now is so one-sided, matches are over in minutes",
      "engagement": 2086,
      "date": "2026-05-29",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Honestly the World of Warcraft shop rotation this week had some great value skins",
      "engagement": 3231,
      "date": "2026-06-13",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Why does World of Warcraft keep pushing bundles right after a content drought",
      "engagement": 2380,
      "date": "2026-06-02",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in PUBG Mobile, easily the best update in a year",
      "engagement": 2265,
      "date": "2026-05-27",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "General Discussion",
      "text": "Is Once Human worth getting into in 2026 or is the playerbase dying?",
      "engagement": 983,
      "date": "2026-06-08",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Once Human today, balance actually felt fair for once",
      "engagement": 3328,
      "date": "2026-06-20",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "Just finished the new PUBG Mobile content drop, the story beats were great",
      "engagement": 3959,
      "date": "2026-06-07",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Best server/region to play World of Warcraft on for lower ping in Europe?",
      "engagement": 3734,
      "date": "2026-06-16",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "The new zone/map in PUBG Mobile is gorgeous, spent an hour just exploring",
      "engagement": 3206,
      "date": "2026-06-28",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Performance in Once Human improved a lot after today's hotfix, nice to see",
      "engagement": 3524,
      "date": "2026-06-10",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Once Human right now?",
      "engagement": 966,
      "date": "2026-06-04",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Marvel Rivals right now?",
      "engagement": 408,
      "date": "2026-05-27",
      "sentiment_compound": 0.791,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "World of Warcraft's new event is fun but way too short for how much was teased",
      "engagement": 193,
      "date": "2026-06-25",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "The new zone/map in Marvel Rivals is gorgeous, spent an hour just exploring",
      "engagement": 1692,
      "date": "2026-06-08",
      "sentiment_compound": 0.778,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Anyone else think PUBG Mobile's latest patch made ranked matches feel unbalanced?",
      "engagement": 1571,
      "date": "2026-06-05",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "General Discussion",
      "text": "Is Once Human worth getting into in 2026 or is the playerbase dying?",
      "engagement": 2617,
      "date": "2026-06-28",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Best server/region to play World of Warcraft on for lower ping in Europe?",
      "engagement": 2780,
      "date": "2026-06-11",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Once Human? Confusing",
      "engagement": 1742,
      "date": "2026-06-01",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Marvel Rivals today, balance actually felt fair for once",
      "engagement": 441,
      "date": "2026-06-29",
      "sentiment_compound": 0.848,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Performance in Marvel Rivals improved a lot after today's hotfix, nice to see",
      "engagement": 3404,
      "date": "2026-06-02",
      "sentiment_compound": 0.827,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "Getting constant disconnects in World of Warcraft since the last patch, anyone else?",
      "engagement": 3057,
      "date": "2026-06-13",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Bugs / Technical",
      "text": "Performance in PUBG Mobile improved a lot after today's hotfix, nice to see",
      "engagement": 783,
      "date": "2026-06-06",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "Getting constant disconnects in PUBG Mobile since the last patch, anyone else?",
      "engagement": 1810,
      "date": "2026-07-12",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in PUBG Mobile before next season",
      "engagement": 1706,
      "date": "2026-07-04",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Where Winds Meet? Confusing",
      "engagement": 3746,
      "date": "2026-06-28",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Once Human? Confusing",
      "engagement": 1392,
      "date": "2026-05-25",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 2971,
      "date": "2026-06-01",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Where Winds Meet, easily the best update in a year",
      "engagement": 2202,
      "date": "2026-07-07",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Performance in Marvel Rivals improved a lot after today's hotfix, nice to see",
      "engagement": 962,
      "date": "2026-06-15",
      "sentiment_compound": 0.827,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Where Winds Meet, at least none of it is pay-to-win",
      "engagement": 2607,
      "date": "2026-05-23",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 3880,
      "date": "2026-07-12",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 1524,
      "date": "2026-06-02",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "The new zone/map in Where Winds Meet is gorgeous, spent an hour just exploring",
      "engagement": 2687,
      "date": "2026-07-08",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Once Human? Confusing",
      "engagement": 1522,
      "date": "2026-07-01",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in PUBG Mobile right now?",
      "engagement": 1509,
      "date": "2026-06-10",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "The new zone/map in World of Warcraft is gorgeous, spent an hour just exploring",
      "engagement": 3892,
      "date": "2026-05-21",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "Getting constant disconnects in PUBG Mobile since the last patch, anyone else?",
      "engagement": 1371,
      "date": "2026-06-30",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Where Winds Meet, at least none of it is pay-to-win",
      "engagement": 3335,
      "date": "2026-05-21",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 597,
      "date": "2026-07-06",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Anyone else think PUBG Mobile's latest patch made ranked matches feel unbalanced?",
      "engagement": 1472,
      "date": "2026-05-26",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 3043,
      "date": "2026-06-18",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "World of Warcraft's new event is fun but way too short for how much was teased",
      "engagement": 451,
      "date": "2026-06-16",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Where Winds Meet before next season",
      "engagement": 3953,
      "date": "2026-07-14",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "New Content",
      "text": "Just finished the new Once Human content drop, the story beats were great",
      "engagement": 3731,
      "date": "2026-06-17",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in World of Warcraft, at least none of it is pay-to-win",
      "engagement": 1131,
      "date": "2026-06-05",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 2178,
      "date": "2026-06-26",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Just finished the new Where Winds Meet content drop, the story beats were great",
      "engagement": 2671,
      "date": "2026-05-19",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "The new zone/map in PUBG Mobile is gorgeous, spent an hour just exploring",
      "engagement": 3394,
      "date": "2026-06-15",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Why does World of Warcraft keep pushing bundles right after a content drought",
      "engagement": 1538,
      "date": "2026-07-05",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Anyone else think Once Human's latest patch made ranked matches feel unbalanced?",
      "engagement": 400,
      "date": "2026-05-28",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Bugs / Technical",
      "text": "Performance in PUBG Mobile improved a lot after today's hotfix, nice to see",
      "engagement": 1687,
      "date": "2026-06-22",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Once Human right now?",
      "engagement": 2464,
      "date": "2026-06-25",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "The new zone/map in Where Winds Meet is gorgeous, spent an hour just exploring",
      "engagement": 923,
      "date": "2026-05-22",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Where Winds Meet's new event is fun but way too short for how much was teased",
      "engagement": 3311,
      "date": "2026-06-17",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Getting constant disconnects in Where Winds Meet since the last patch, anyone else?",
      "engagement": 2699,
      "date": "2026-05-22",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in World of Warcraft before next season",
      "engagement": 1442,
      "date": "2026-07-15",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "PUBG Mobile crashed on me twice tonight, frustrating during ranked",
      "engagement": 3040,
      "date": "2026-06-05",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Honestly the Where Winds Meet shop rotation this week had some great value skins",
      "engagement": 649,
      "date": "2026-06-21",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "Been playing Marvel Rivals since launch, still amazes me how the community has grown",
      "engagement": 642,
      "date": "2026-07-04",
      "sentiment_compound": 0.778,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Honestly the World of Warcraft shop rotation this week had some great value skins",
      "engagement": 1815,
      "date": "2026-06-19",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 2782,
      "date": "2026-06-01",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Getting constant disconnects in Where Winds Meet since the last patch, anyone else?",
      "engagement": 2459,
      "date": "2026-07-12",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "Is Marvel Rivals worth getting into in 2026 or is the playerbase dying?",
      "engagement": 1190,
      "date": "2026-06-25",
      "sentiment_compound": 0.572,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Once Human pro play is going viral, absolutely insane outplay",
      "engagement": 2186,
      "date": "2026-05-31",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "General Discussion",
      "text": "First time trying Where Winds Meet after years away, forgot how good the atmosphere is",
      "engagement": 3534,
      "date": "2026-05-29",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "Just finished the new World of Warcraft content drop, the story beats were great",
      "engagement": 2363,
      "date": "2026-06-17",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Honestly the Once Human shop rotation this week had some great value skins",
      "engagement": 1335,
      "date": "2026-07-04",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Anyone else think Marvel Rivals's latest patch made ranked matches feel unbalanced?",
      "engagement": 2417,
      "date": "2026-06-19",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Once Human? Confusing",
      "engagement": 3196,
      "date": "2026-07-05",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "The new zone/map in World of Warcraft is gorgeous, spent an hour just exploring",
      "engagement": 1436,
      "date": "2026-06-22",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in PUBG Mobile, at least none of it is pay-to-win",
      "engagement": 715,
      "date": "2026-06-07",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in World of Warcraft today, balance actually felt fair for once",
      "engagement": 2314,
      "date": "2026-05-27",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Bugs / Technical",
      "text": "Performance in Where Winds Meet improved a lot after today's hotfix, nice to see",
      "engagement": 2574,
      "date": "2026-06-25",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "World of Warcraft's new event is fun but way too short for how much was teased",
      "engagement": 2427,
      "date": "2026-07-11",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Honestly the World of Warcraft shop rotation this week had some great value skins",
      "engagement": 1515,
      "date": "2026-05-22",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "World of Warcraft crashed on me twice tonight, frustrating during ranked",
      "engagement": 2275,
      "date": "2026-05-25",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "The new zone/map in World of Warcraft is gorgeous, spent an hour just exploring",
      "engagement": 1953,
      "date": "2026-06-13",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Once Human before next season",
      "engagement": 350,
      "date": "2026-06-12",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Honestly the World of Warcraft shop rotation this week had some great value skins",
      "engagement": 2151,
      "date": "2026-06-11",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Marvel Rivals's new event is fun but way too short for how much was teased",
      "engagement": 3177,
      "date": "2026-06-23",
      "sentiment_compound": 0.064,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "General Discussion",
      "text": "First time trying World of Warcraft after years away, forgot how good the atmosphere is",
      "engagement": 392,
      "date": "2026-06-09",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Marvel Rivals, at least none of it is pay-to-win",
      "engagement": 2391,
      "date": "2026-06-03",
      "sentiment_compound": 0.663,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Honestly the Marvel Rivals shop rotation this week had some great value skins",
      "engagement": 2908,
      "date": "2026-05-16",
      "sentiment_compound": 0.906,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Where Winds Meet's new event is fun but way too short for how much was teased",
      "engagement": 2749,
      "date": "2026-05-31",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 79,
      "date": "2026-06-21",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Honestly the PUBG Mobile shop rotation this week had some great value skins",
      "engagement": 568,
      "date": "2026-07-06",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "Just finished the new World of Warcraft content drop, the story beats were great",
      "engagement": 3594,
      "date": "2026-05-26",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "The new zone/map in Where Winds Meet is gorgeous, spent an hour just exploring",
      "engagement": 2842,
      "date": "2026-05-26",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 2775,
      "date": "2026-05-30",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Honestly the Where Winds Meet shop rotation this week had some great value skins",
      "engagement": 984,
      "date": "2026-06-25",
      "sentiment_compound": 0.859,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in PUBG Mobile, easily the best update in a year",
      "engagement": 1159,
      "date": "2026-05-26",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "The new zone/map in Where Winds Meet is gorgeous, spent an hour just exploring",
      "engagement": 3286,
      "date": "2026-06-07",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Marvel Rivals today, balance actually felt fair for once",
      "engagement": 2276,
      "date": "2026-05-17",
      "sentiment_compound": 0.848,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Where Winds Meet? Confusing",
      "engagement": 661,
      "date": "2026-06-27",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 3734,
      "date": "2026-06-30",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Marvel Rivals on for lower ping in Europe?",
      "engagement": 2061,
      "date": "2026-06-22",
      "sentiment_compound": 0.802,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "Just finished the new World of Warcraft content drop, the story beats were great",
      "engagement": 410,
      "date": "2026-05-22",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Marvel Rivals pro play is going viral, absolutely insane outplay",
      "engagement": 3762,
      "date": "2026-05-22",
      "sentiment_compound": 0.297,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 26,
      "date": "2026-05-19",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Marvel Rivals, at least none of it is pay-to-win",
      "engagement": 2983,
      "date": "2026-06-06",
      "sentiment_compound": 0.663,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "This clip of a World of Warcraft pro play is going viral, absolutely insane outplay",
      "engagement": 200,
      "date": "2026-06-29",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Just finished the new Where Winds Meet content drop, the story beats were great",
      "engagement": 2052,
      "date": "2026-06-06",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in Where Winds Meet, reported it but no fix yet",
      "engagement": 11,
      "date": "2026-06-05",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Just finished the new Where Winds Meet content drop, the story beats were great",
      "engagement": 1482,
      "date": "2026-07-10",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "Been playing Where Winds Meet since launch, still amazes me how the community has grown",
      "engagement": 1930,
      "date": "2026-07-12",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Marvel Rivals feels steep compared to last season",
      "engagement": 281,
      "date": "2026-06-23",
      "sentiment_compound": 0.052,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "General Discussion",
      "text": "First time trying World of Warcraft after years away, forgot how good the atmosphere is",
      "engagement": 1448,
      "date": "2026-06-10",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 1965,
      "date": "2026-06-05",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in PUBG Mobile today, balance actually felt fair for once",
      "engagement": 830,
      "date": "2026-07-13",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Why does World of Warcraft keep pushing bundles right after a content drought",
      "engagement": 3344,
      "date": "2026-06-10",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "This clip of a World of Warcraft pro play is going viral, absolutely insane outplay",
      "engagement": 3536,
      "date": "2026-05-27",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Why does Marvel Rivals keep pushing bundles right after a content drought",
      "engagement": 1643,
      "date": "2026-05-28",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Once Human, at least none of it is pay-to-win",
      "engagement": 2042,
      "date": "2026-06-21",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "Been playing World of Warcraft since launch, still amazes me how the community has grown",
      "engagement": 3373,
      "date": "2026-07-03",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 1260,
      "date": "2026-06-16",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Once Human today, balance actually felt fair for once",
      "engagement": 178,
      "date": "2026-05-29",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Once Human feels steep compared to last season",
      "engagement": 2616,
      "date": "2026-06-19",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "Is PUBG Mobile worth getting into in 2026 or is the playerbase dying?",
      "engagement": 2782,
      "date": "2026-05-25",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in PUBG Mobile before next season",
      "engagement": 3894,
      "date": "2026-06-09",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Bugs / Technical",
      "text": "Performance in PUBG Mobile improved a lot after today's hotfix, nice to see",
      "engagement": 3130,
      "date": "2026-07-10",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Where Winds Meet's new event is fun but way too short for how much was teased",
      "engagement": 1027,
      "date": "2026-07-08",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in PUBG Mobile, easily the best update in a year",
      "engagement": 487,
      "date": "2026-06-29",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Why does Once Human keep pushing bundles right after a content drought",
      "engagement": 2016,
      "date": "2026-07-03",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in World of Warcraft, easily the best update in a year",
      "engagement": 3324,
      "date": "2026-06-01",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "First time trying Marvel Rivals after years away, forgot how good the atmosphere is",
      "engagement": 3492,
      "date": "2026-07-04",
      "sentiment_compound": 0.691,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "This clip of a PUBG Mobile pro play is going viral, absolutely insane outplay",
      "engagement": 828,
      "date": "2026-05-26",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Once Human before next season",
      "engagement": 2264,
      "date": "2026-07-06",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in World of Warcraft today, balance actually felt fair for once",
      "engagement": 2949,
      "date": "2026-06-14",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "Been playing Once Human since launch, still amazes me how the community has grown",
      "engagement": 1303,
      "date": "2026-06-04",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Performance in Once Human improved a lot after today's hotfix, nice to see",
      "engagement": 3400,
      "date": "2026-05-26",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "The meta in Where Winds Meet right now is so one-sided, matches are over in minutes",
      "engagement": 3735,
      "date": "2026-05-21",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "World of Warcraft's new event is fun but way too short for how much was teased",
      "engagement": 1326,
      "date": "2026-05-16",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in Marvel Rivals? Confusing",
      "engagement": 1031,
      "date": "2026-07-02",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 387,
      "date": "2026-06-12",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "General Discussion",
      "text": "Is Where Winds Meet worth getting into in 2026 or is the playerbase dying?",
      "engagement": 2562,
      "date": "2026-05-29",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 3890,
      "date": "2026-06-03",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 129,
      "date": "2026-06-13",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Performance in Marvel Rivals improved a lot after today's hotfix, nice to see",
      "engagement": 3301,
      "date": "2026-05-24",
      "sentiment_compound": 0.827,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Just finished the new Marvel Rivals content drop, the story beats were great",
      "engagement": 1707,
      "date": "2026-06-14",
      "sentiment_compound": 0.7,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Performance in Marvel Rivals improved a lot after today's hotfix, nice to see",
      "engagement": 1312,
      "date": "2026-05-29",
      "sentiment_compound": 0.827,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 1915,
      "date": "2026-07-08",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Anyone else think PUBG Mobile's latest patch made ranked matches feel unbalanced?",
      "engagement": 1578,
      "date": "2026-05-20",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "Is PUBG Mobile worth getting into in 2026 or is the playerbase dying?",
      "engagement": 3829,
      "date": "2026-06-08",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 1917,
      "date": "2026-06-13",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in World of Warcraft today, balance actually felt fair for once",
      "engagement": 3964,
      "date": "2026-06-30",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 3619,
      "date": "2026-05-22",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Once Human feels steep compared to last season",
      "engagement": 1770,
      "date": "2026-07-07",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "General Discussion",
      "text": "First time trying Marvel Rivals after years away, forgot how good the atmosphere is",
      "engagement": 214,
      "date": "2026-06-08",
      "sentiment_compound": 0.691,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 1849,
      "date": "2026-05-27",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Getting constant disconnects in Where Winds Meet since the last patch, anyone else?",
      "engagement": 401,
      "date": "2026-06-19",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Bugs / Technical",
      "text": "Performance in Marvel Rivals improved a lot after today's hotfix, nice to see",
      "engagement": 820,
      "date": "2026-06-06",
      "sentiment_compound": 0.827,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 1369,
      "date": "2026-05-24",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "The meta in Once Human right now is so one-sided, matches are over in minutes",
      "engagement": 2516,
      "date": "2026-06-25",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "General Discussion",
      "text": "First time trying Where Winds Meet after years away, forgot how good the atmosphere is",
      "engagement": 2082,
      "date": "2026-05-22",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "General Discussion",
      "text": "First time trying Once Human after years away, forgot how good the atmosphere is",
      "engagement": 73,
      "date": "2026-06-21",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in World of Warcraft? Confusing",
      "engagement": 2975,
      "date": "2026-05-20",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Bugs / Technical",
      "text": "Performance in World of Warcraft improved a lot after today's hotfix, nice to see",
      "engagement": 3211,
      "date": "2026-05-26",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 2581,
      "date": "2026-05-29",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "The meta in Once Human right now is so one-sided, matches are over in minutes",
      "engagement": 3888,
      "date": "2026-06-01",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in World of Warcraft, easily the best update in a year",
      "engagement": 2833,
      "date": "2026-07-01",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Where Winds Meet right now?",
      "engagement": 2129,
      "date": "2026-07-01",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "New Content",
      "text": "Once Human's new event is fun but way too short for how much was teased",
      "engagement": 1887,
      "date": "2026-05-17",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Where Winds Meet's new event is fun but way too short for how much was teased",
      "engagement": 792,
      "date": "2026-06-30",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Why does Marvel Rivals keep pushing bundles right after a content drought",
      "engagement": 2892,
      "date": "2026-07-01",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Why does Once Human keep pushing bundles right after a content drought",
      "engagement": 3832,
      "date": "2026-05-25",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Marvel Rivals today, balance actually felt fair for once",
      "engagement": 1621,
      "date": "2026-05-23",
      "sentiment_compound": 0.848,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Why does PUBG Mobile keep pushing bundles right after a content drought",
      "engagement": 328,
      "date": "2026-06-22",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Marvel Rivals pro play is going viral, absolutely insane outplay",
      "engagement": 2211,
      "date": "2026-06-27",
      "sentiment_compound": 0.297,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "The meta in Marvel Rivals right now is so one-sided, matches are over in minutes",
      "engagement": 2748,
      "date": "2026-05-18",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in PUBG Mobile today, balance actually felt fair for once",
      "engagement": 1939,
      "date": "2026-07-08",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "The meta in PUBG Mobile right now is so one-sided, matches are over in minutes",
      "engagement": 3834,
      "date": "2026-05-19",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "First time trying PUBG Mobile after years away, forgot how good the atmosphere is",
      "engagement": 2650,
      "date": "2026-07-12",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Where Winds Meet feels steep compared to last season",
      "engagement": 722,
      "date": "2026-06-19",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Best server/region to play World of Warcraft on for lower ping in Europe?",
      "engagement": 768,
      "date": "2026-05-16",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in Marvel Rivals right now?",
      "engagement": 2473,
      "date": "2026-07-08",
      "sentiment_compound": 0.791,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Once Human on for lower ping in Europe?",
      "engagement": 554,
      "date": "2026-05-21",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Anyone else think Marvel Rivals's latest patch made ranked matches feel unbalanced?",
      "engagement": 2999,
      "date": "2026-06-15",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in PUBG Mobile before next season",
      "engagement": 2330,
      "date": "2026-06-02",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Where Winds Meet on for lower ping in Europe?",
      "engagement": 2115,
      "date": "2026-06-25",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 3838,
      "date": "2026-06-30",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "Why does Once Human keep pushing bundles right after a content drought",
      "engagement": 1241,
      "date": "2026-06-07",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "Why does World of Warcraft keep pushing bundles right after a content drought",
      "engagement": 259,
      "date": "2026-06-03",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 2621,
      "date": "2026-05-17",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Where Winds Meet, at least none of it is pay-to-win",
      "engagement": 1868,
      "date": "2026-05-28",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "The Once Human community event this weekend brought back so many good memories",
      "engagement": 3289,
      "date": "2026-06-03",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "Getting constant disconnects in PUBG Mobile since the last patch, anyone else?",
      "engagement": 2168,
      "date": "2026-05-30",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "The meta in Where Winds Meet right now is so one-sided, matches are over in minutes",
      "engagement": 618,
      "date": "2026-07-04",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "The new zone/map in Where Winds Meet is gorgeous, spent an hour just exploring",
      "engagement": 2007,
      "date": "2026-07-09",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in World of Warcraft, easily the best update in a year",
      "engagement": 241,
      "date": "2026-06-09",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "The Marvel Rivals community event this weekend brought back so many good memories",
      "engagement": 17,
      "date": "2026-05-29",
      "sentiment_compound": 0.717,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in World of Warcraft before next season",
      "engagement": 2221,
      "date": "2026-07-12",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Once Human today, balance actually felt fair for once",
      "engagement": 559,
      "date": "2026-05-26",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Once Human, easily the best update in a year",
      "engagement": 3761,
      "date": "2026-05-17",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in World of Warcraft, reported it but no fix yet",
      "engagement": 1429,
      "date": "2026-07-08",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "New Content",
      "text": "The new zone/map in Once Human is gorgeous, spent an hour just exploring",
      "engagement": 3102,
      "date": "2026-07-13",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Where Winds Meet, easily the best update in a year",
      "engagement": 1018,
      "date": "2026-06-15",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Anyone else think Marvel Rivals's latest patch made ranked matches feel unbalanced?",
      "engagement": 2709,
      "date": "2026-06-18",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "The new battle pass pricing in World of Warcraft feels steep compared to last season",
      "engagement": 142,
      "date": "2026-06-16",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Monetization",
      "text": "The new battle pass pricing in World of Warcraft feels steep compared to last season",
      "engagement": 964,
      "date": "2026-06-11",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in World of Warcraft before next season",
      "engagement": 3758,
      "date": "2026-05-29",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Bugs / Technical",
      "text": "Performance in Where Winds Meet improved a lot after today's hotfix, nice to see",
      "engagement": 3594,
      "date": "2026-07-05",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 3890,
      "date": "2026-06-07",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Balance / PvP",
      "text": "PUBG Mobile crashed on me twice tonight, frustrating during ranked",
      "engagement": 197,
      "date": "2026-06-22",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "General Discussion",
      "text": "First time trying Once Human after years away, forgot how good the atmosphere is",
      "engagement": 1677,
      "date": "2026-07-05",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 928,
      "date": "2026-06-25",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Once Human on for lower ping in Europe?",
      "engagement": 2287,
      "date": "2026-06-12",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Why does PUBG Mobile keep pushing bundles right after a content drought",
      "engagement": 3782,
      "date": "2026-06-16",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Where Winds Meet pro play is going viral, absolutely insane outplay",
      "engagement": 1549,
      "date": "2026-06-01",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "General Discussion",
      "text": "Is World of Warcraft worth getting into in 2026 or is the playerbase dying?",
      "engagement": 2411,
      "date": "2026-05-29",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 3728,
      "date": "2026-07-15",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "What's the best build for a beginner in PUBG Mobile right now?",
      "engagement": 3094,
      "date": "2026-06-15",
      "sentiment_compound": 0.637,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 2266,
      "date": "2026-06-24",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "New Content",
      "text": "Once Human's new event is fun but way too short for how much was teased",
      "engagement": 1478,
      "date": "2026-06-12",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "The World of Warcraft community event this weekend brought back so many good memories",
      "engagement": 1316,
      "date": "2026-05-18",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "The new zone/map in Marvel Rivals is gorgeous, spent an hour just exploring",
      "engagement": 71,
      "date": "2026-06-28",
      "sentiment_compound": 0.778,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Where Winds Meet crashed on me twice tonight, frustrating during ranked",
      "engagement": 808,
      "date": "2026-06-24",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 3869,
      "date": "2026-06-01",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Once Human on for lower ping in Europe?",
      "engagement": 3006,
      "date": "2026-05-25",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "The PUBG Mobile community event this weekend brought back so many good memories",
      "engagement": 3647,
      "date": "2026-06-10",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 2742,
      "date": "2026-07-12",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "This clip of a PUBG Mobile pro play is going viral, absolutely insane outplay",
      "engagement": 623,
      "date": "2026-07-15",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Cannot stop playing the new mode in Once Human, easily the best update in a year",
      "engagement": 69,
      "date": "2026-07-14",
      "sentiment_compound": 0.784,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Once Human before next season",
      "engagement": 1179,
      "date": "2026-07-13",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Community / Nostalgia",
      "text": "This clip of a Once Human pro play is going viral, absolutely insane outplay",
      "engagement": 399,
      "date": "2026-06-12",
      "sentiment_compound": -0.151,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Bugs / Technical",
      "text": "Performance in PUBG Mobile improved a lot after today's hotfix, nice to see",
      "engagement": 1099,
      "date": "2026-05-25",
      "sentiment_compound": 0.71,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Marvel Rivals on for lower ping in Europe?",
      "engagement": 2860,
      "date": "2026-06-30",
      "sentiment_compound": 0.802,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "New Content",
      "text": "Getting constant disconnects in World of Warcraft since the last patch, anyone else?",
      "engagement": 1558,
      "date": "2026-06-20",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "World of Warcraft",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in World of Warcraft, reported it but no fix yet",
      "engagement": 3467,
      "date": "2026-06-17",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "New Content",
      "text": "Getting constant disconnects in Marvel Rivals since the last patch, anyone else?",
      "engagement": 3769,
      "date": "2026-07-13",
      "sentiment_compound": 0.421,
      "sentiment_label": "positive"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Just finished the new Where Winds Meet content drop, the story beats were great",
      "engagement": 2808,
      "date": "2026-05-17",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Getting constant disconnects in Where Winds Meet since the last patch, anyone else?",
      "engagement": 3488,
      "date": "2026-06-25",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Where Winds Meet today, balance actually felt fair for once",
      "engagement": 1230,
      "date": "2026-07-04",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 2219,
      "date": "2026-06-23",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Community / Nostalgia",
      "text": "Been playing PUBG Mobile since launch, still amazes me how the community has grown",
      "engagement": 3995,
      "date": "2026-06-23",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Once Human feels steep compared to last season",
      "engagement": 3154,
      "date": "2026-06-05",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 1850,
      "date": "2026-06-14",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Where Winds Meet on for lower ping in Europe?",
      "engagement": 2404,
      "date": "2026-06-02",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Not mad about cosmetics in Where Winds Meet, at least none of it is pay-to-win",
      "engagement": 341,
      "date": "2026-06-28",
      "sentiment_compound": 0.388,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "First time trying PUBG Mobile after years away, forgot how good the atmosphere is",
      "engagement": 379,
      "date": "2026-07-14",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "Been playing Marvel Rivals since launch, still amazes me how the community has grown",
      "engagement": 772,
      "date": "2026-06-17",
      "sentiment_compound": 0.778,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "New Content",
      "text": "Just finished the new Where Winds Meet content drop, the story beats were great",
      "engagement": 1454,
      "date": "2026-06-10",
      "sentiment_compound": 0.459,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Community / Nostalgia",
      "text": "The Where Winds Meet community event this weekend brought back so many good memories",
      "engagement": 1699,
      "date": "2026-06-21",
      "sentiment_compound": 0.49,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "General Discussion",
      "text": "Is Where Winds Meet worth getting into in 2026 or is the playerbase dying?",
      "engagement": 699,
      "date": "2026-06-01",
      "sentiment_compound": 0.226,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Why does PUBG Mobile keep pushing bundles right after a content drought",
      "engagement": 264,
      "date": "2026-07-04",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Monetization",
      "text": "The new battle pass pricing in Once Human feels steep compared to last season",
      "engagement": 3872,
      "date": "2026-06-29",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in Once Human, reported it but no fix yet",
      "engagement": 559,
      "date": "2026-06-26",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "Marvel Rivals",
      "theme": "Community / Nostalgia",
      "text": "The Marvel Rivals community event this weekend brought back so many good memories",
      "engagement": 1354,
      "date": "2026-06-16",
      "sentiment_compound": 0.717,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Where Winds Meet before next season",
      "engagement": 2852,
      "date": "2026-07-02",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "PUBG Mobile",
      "theme": "Questions / Help",
      "text": "Can someone explain the new progression system in PUBG Mobile? Confusing",
      "engagement": 2851,
      "date": "2026-06-04",
      "sentiment_compound": -0.226,
      "sentiment_label": "negative"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Why does PUBG Mobile keep pushing bundles right after a content drought",
      "engagement": 1614,
      "date": "2026-06-22",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "The meta in Where Winds Meet right now is so one-sided, matches are over in minutes",
      "engagement": 2258,
      "date": "2026-07-13",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "New Content",
      "text": "PUBG Mobile's new event is fun but way too short for how much was teased",
      "engagement": 288,
      "date": "2026-05-23",
      "sentiment_compound": -0.166,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Once Human before next season",
      "engagement": 2702,
      "date": "2026-07-05",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Once Human today, balance actually felt fair for once",
      "engagement": 2193,
      "date": "2026-06-12",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Where Winds Meet before next season",
      "engagement": 3332,
      "date": "2026-06-10",
      "sentiment_compound": 0.586,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 1459,
      "date": "2026-07-04",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "World of Warcraft crashed on me twice tonight, frustrating during ranked",
      "engagement": 1363,
      "date": "2026-05-25",
      "sentiment_compound": -0.44,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Balance / PvP",
      "text": "The meta in World of Warcraft right now is so one-sided, matches are over in minutes",
      "engagement": 2129,
      "date": "2026-06-09",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Monetization",
      "text": "Why does Where Winds Meet keep pushing bundles right after a content drought",
      "engagement": 3168,
      "date": "2026-06-01",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Anyone else think Where Winds Meet's latest patch made ranked matches feel unbalanced?",
      "engagement": 1215,
      "date": "2026-06-19",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "Why does PUBG Mobile keep pushing bundles right after a content drought",
      "engagement": 852,
      "date": "2026-06-11",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "reddit",
      "game": "Once Human",
      "theme": "Balance / PvP",
      "text": "Had a great comeback match in Once Human today, balance actually felt fair for once",
      "engagement": 1234,
      "date": "2026-07-12",
      "sentiment_compound": 0.751,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "World of Warcraft",
      "theme": "Community / Nostalgia",
      "text": "Been playing World of Warcraft since launch, still amazes me how the community has grown",
      "engagement": 678,
      "date": "2026-05-16",
      "sentiment_compound": 0.612,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "The meta in Where Winds Meet right now is so one-sided, matches are over in minutes",
      "engagement": 1751,
      "date": "2026-06-16",
      "sentiment_compound": 0.0,
      "sentiment_label": "neutral"
    },
    {
      "platform": "youtube",
      "game": "Once Human",
      "theme": "Bugs / Technical",
      "text": "Found a game-breaking bug in Once Human, reported it but no fix yet",
      "engagement": 1775,
      "date": "2026-06-20",
      "sentiment_compound": -0.421,
      "sentiment_label": "negative"
    },
    {
      "platform": "youtube",
      "game": "Where Winds Meet",
      "theme": "Balance / PvP",
      "text": "Best server/region to play Where Winds Meet on for lower ping in Europe?",
      "engagement": 1597,
      "date": "2026-07-14",
      "sentiment_compound": 0.66,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "PUBG Mobile",
      "theme": "Monetization",
      "text": "The new battle pass pricing in PUBG Mobile feels steep compared to last season",
      "engagement": 3279,
      "date": "2026-05-20",
      "sentiment_compound": -0.382,
      "sentiment_label": "negative"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Monetization",
      "text": "Honestly the Marvel Rivals shop rotation this week had some great value skins",
      "engagement": 2752,
      "date": "2026-05-20",
      "sentiment_compound": 0.906,
      "sentiment_label": "positive"
    },
    {
      "platform": "youtube",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Marvel Rivals crashed on me twice tonight, frustrating during ranked",
      "engagement": 1430,
      "date": "2026-06-22",
      "sentiment_compound": -0.026,
      "sentiment_label": "neutral"
    },
    {
      "platform": "discord",
      "game": "PUBG Mobile",
      "theme": "General Discussion",
      "text": "First time trying PUBG Mobile after years away, forgot how good the atmosphere is",
      "engagement": 2422,
      "date": "2026-07-09",
      "sentiment_compound": 0.44,
      "sentiment_label": "positive"
    },
    {
      "platform": "reddit",
      "game": "Marvel Rivals",
      "theme": "Balance / PvP",
      "text": "Devs really need to look at the win rates in Marvel Rivals before next season",
      "engagement": 1534,
      "date": "2026-06-01",
      "sentiment_compound": 0.765,
      "sentiment_label": "positive"
    }
  ]
};

const PLATFORM_COLORS = { reddit: "#FF4D6D", youtube: "#FF4D6D", discord: "#4D9FFF" };
const SENT_COLORS = { positive: "#3ECF8E", neutral: "#F0B429", negative: "#FF4D6D" };

function Ticker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((t, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SignalBar({ label, split }) {
  const total = split.positive + split.neutral + split.negative || 1;
  const pos = (split.positive / total) * 100;
  const neu = (split.neutral / total) * 100;
  const neg = (split.negative / total) * 100;
  const netScore = Math.round(((split.positive - split.negative) / total) * 100);
  return (
    <div className="signal-row">
      <div className="signal-label">
        <span>{label}</span>
        <span className={`net-score ${netScore >= 0 ? "net-pos" : "net-neg"}`}>
          {netScore >= 0 ? "+" : ""}{netScore}
        </span>
      </div>
      <div className="signal-bar">
        <div className="seg" style={{ width: `${pos}%`, background: SENT_COLORS.positive }} />
        <div className="seg" style={{ width: `${neu}%`, background: SENT_COLORS.neutral }} />
        <div className="seg" style={{ width: `${neg}%`, background: SENT_COLORS.negative }} />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activeGame, setActiveGame] = useState("All Games");
  const games = ["All Games", ...DASHBOARD_DATA.games];

  const filteredPosts = useMemo(() => {
    if (activeGame === "All Games") return DASHBOARD_DATA.raw_posts;
    return DASHBOARD_DATA.raw_posts.filter((p) => p.game === activeGame);
  }, [activeGame]);

  const trendData = useMemo(() => {
    const source = activeGame === "All Games"
      ? DASHBOARD_DATA.daily_trend
      : DASHBOARD_DATA.daily_trend.filter((d) => d.game === activeGame);
    const byDate = {};
    source.forEach((row) => {
      if (!byDate[row.date]) byDate[row.date] = { date: row.date, volume: 0, sentSum: 0, sentCount: 0 };
      byDate[row.date].volume += row.volume;
      byDate[row.date].sentSum += row.avg_sentiment * row.volume;
      byDate[row.date].sentCount += row.volume;
    });
    return Object.values(byDate)
      .map((d) => ({ date: d.date.slice(5), volume: d.volume, sentiment: +(d.sentSum / d.sentCount).toFixed(2) }))
      .sort((a, b) => (a.date > b.date ? 1 : -1));
  }, [activeGame]);

  const themeData = useMemo(() => {
    if (activeGame === "All Games") {
      const combined = {};
      Object.values(DASHBOARD_DATA.theme_breakdown).forEach((arr) => {
        arr.forEach(({ theme, count }) => { combined[theme] = (combined[theme] || 0) + count; });
      });
      return Object.entries(combined).map(([theme, count]) => ({ theme, count })).sort((a, b) => b.count - a.count);
    }
    return DASHBOARD_DATA.theme_breakdown[activeGame] || [];
  }, [activeGame]);

  const totalPosts = filteredPosts.length;
  const avgSentiment = filteredPosts.length
    ? (filteredPosts.reduce((s, p) => s + p.sentiment_compound, 0) / filteredPosts.length)
    : 0;
  const topTheme = themeData[0]?.theme || "—";

  const tickerItems = [
    `${DASHBOARD_DATA.total_posts_analyzed} signals monitored`,
    `${DASHBOARD_DATA.games.length} titles tracked`,
    `${DASHBOARD_DATA.volume_spikes.length} volume spikes detected`,
    `Top theme: ${DASHBOARD_DATA.theme_breakdown[DASHBOARD_DATA.games[0]]?.[0]?.theme || "N/A"}`,
    `Last refresh: ${new Date(DASHBOARD_DATA.generated_at).toLocaleDateString()}`,
  ];

  return (
    <div className="dash-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .dash-root {
          background: #0B0E14;
          color: #E8ECF1;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          padding-bottom: 40px;
        }
        .dash-header {
          padding: 20px 28px 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: 0.5px;
        }
        .brand .live-dot {
          width: 9px; height: 9px; border-radius: 50%;
          background: #3ECF8E;
          box-shadow: 0 0 8px #3ECF8E;
          animation: pulse 1.6s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.35; }
        }
        .subtitle { color: #7C8A9C; font-size: 12.5px; font-family: 'JetBrains Mono', monospace; margin-top: 2px; }

        .ticker-wrap {
          margin-top: 16px;
          border-top: 1px solid #1F2937;
          border-bottom: 1px solid #1F2937;
          background: #0F131C;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex;
          animation: scroll 28s linear infinite;
          padding: 8px 0;
        }
        .ticker-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #9FB0C3;
          margin-right: 48px;
          display: inline-flex;
          align-items: center;
        }
        .ticker-dot { width: 5px; height: 5px; background: #FF4D6D; border-radius: 50%; margin-right: 10px; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .tabs {
          display: flex;
          gap: 6px;
          padding: 18px 28px 0 28px;
          flex-wrap: wrap;
        }
        .tab {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 7px 16px;
          border-radius: 3px;
          background: #131A24;
          border: 1px solid #212B38;
          color: #7C8A9C;
          cursor: pointer;
          transition: all 0.15s;
        }
        .tab:hover { border-color: #3ECF8E; color: #E8ECF1; }
        .tab.active {
          background: #17301F;
          border-color: #3ECF8E;
          color: #3ECF8E;
        }

        .kpi-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          padding: 20px 28px 0 28px;
        }
        .kpi-card {
          background: #131A24;
          border: 1px solid #212B38;
          border-radius: 6px;
          padding: 16px 18px;
        }
        .kpi-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #7C8A9C;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .kpi-value {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 32px;
          margin-top: 6px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 14px;
          padding: 14px 28px 0 28px;
        }
        .panel {
          background: #131A24;
          border: 1px solid #212B38;
          border-radius: 6px;
          padding: 18px 20px;
        }
        .panel-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.3px;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #E8ECF1;
        }

        .signal-row { margin-bottom: 14px; }
        .signal-label {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .net-score { font-family: 'JetBrains Mono', monospace; font-size: 12px; }
        .net-pos { color: #3ECF8E; }
        .net-neg { color: #FF4D6D; }
        .signal-bar {
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          background: #1F2937;
        }
        .seg { height: 100%; }

        .list-row {
          padding: 10px 0;
          border-bottom: 1px solid #1B2330;
          font-size: 13px;
        }
        .list-row:last-child { border-bottom: none; }
        .list-row-top { display: flex; justify-content: space-between; margin-bottom: 4px; }
        .list-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #7C8A9C;
          text-transform: uppercase;
        }
        .list-eng { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #4D9FFF; }
        .list-text { color: #C4CDD8; line-height: 1.4; }

        .theme-bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 9px; }
        .theme-bar-label { width: 150px; font-size: 12.5px; color: #C4CDD8; flex-shrink: 0; }
        .theme-bar-track { flex: 1; background: #1F2937; border-radius: 3px; height: 14px; overflow: hidden; }
        .theme-bar-fill { height: 100%; background: linear-gradient(90deg, #4D9FFF, #3ECF8E); }
        .theme-bar-count { width: 34px; text-align: right; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: #7C8A9C; }

        .spike-chip {
          display: inline-flex;
          flex-direction: column;
          background: #1A1420;
          border: 1px solid #3A2436;
          border-radius: 5px;
          padding: 8px 12px;
          margin: 0 8px 8px 0;
        }
        .spike-date { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #FF8FA3; }
        .spike-game { font-size: 12.5px; font-weight: 600; margin-top: 2px; }
        .spike-vol { font-size: 11px; color: #7C8A9C; margin-top: 2px; }
      `}</style>

      <div className="dash-header">
        <div>
          <div className="brand"><span className="live-dot" />RS SIGNAL — Gaming Community Monitor</div>
          <div className="subtitle">PROTOTYPE // Reddit · YouTube · Discord (public data only)</div>
        </div>
      </div>

      <Ticker items={tickerItems} />

      <div className="tabs">
        {games.map((g) => (
          <div key={g} className={`tab ${activeGame === g ? "active" : ""}`} onClick={() => setActiveGame(g)}>
            {g}
          </div>
        ))}
      </div>

      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label"><Radio size={12} />Signals Monitored</div>
          <div className="kpi-value">{totalPosts}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label"><TrendingUp size={12} />Avg. Sentiment</div>
          <div className="kpi-value" style={{ color: avgSentiment >= 0 ? "#3ECF8E" : "#FF4D6D" }}>
            {avgSentiment >= 0 ? "+" : ""}{avgSentiment.toFixed(2)}
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label"><Zap size={12} />Leading Topic</div>
          <div className="kpi-value" style={{ fontSize: 20, marginTop: 10 }}>{topTheme}</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="panel">
          <div className="panel-title"><TrendingUp size={15} color="#4D9FFF" />Volume &amp; Sentiment Over Time</div>
          <ResponsiveContainer width="100%" height={260}>
            <ComposedChart data={trendData}>
              <CartesianGrid stroke="#1B2330" vertical={false} />
              <XAxis dataKey="date" tick={{ fill: "#7C8A9C", fontSize: 11 }} axisLine={{ stroke: "#212B38" }} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fill: "#7C8A9C", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" domain={[-1, 1]} tick={{ fill: "#7C8A9C", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#131A24", border: "1px solid #212B38", fontSize: 12 }} labelStyle={{ color: "#E8ECF1" }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar yAxisId="left" dataKey="volume" fill="#1F3A5F" name="Post Volume" radius={[2, 2, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="sentiment" stroke="#3ECF8E" strokeWidth={2} dot={false} name="Avg Sentiment" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="panel">
          <div className="panel-title"><Zap size={15} color="#3ECF8E" />Sentiment Signal by Title</div>
          {DASHBOARD_DATA.games.map((g) => (
            <SignalBar key={g} label={g} split={DASHBOARD_DATA.sentiment_split[g]} />
          ))}
        </div>
      </div>

      <div className="grid-2">
        <div className="panel">
          <div className="panel-title"><MessageSquare size={15} color="#F0B429" />Recurring Themes</div>
          {themeData.slice(0, 8).map((t) => {
            const max = themeData[0]?.count || 1;
            return (
              <div className="theme-bar-row" key={t.theme}>
                <div className="theme-bar-label">{t.theme}</div>
                <div className="theme-bar-track">
                  <div className="theme-bar-fill" style={{ width: `${(t.count / max) * 100}%` }} />
                </div>
                <div className="theme-bar-count">{t.count}</div>
              </div>
            );
          })}
        </div>

        <div className="panel">
          <div className="panel-title"><Zap size={15} color="#FF4D6D" />Volume Spikes Detected</div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {DASHBOARD_DATA.volume_spikes.slice(0, 10).map((s, i) => (
              <div className="spike-chip" key={i}>
                <span className="spike-date">{s.date}</span>
                <span className="spike-game">{s.game}</span>
                <span className="spike-vol">{s.volume} posts that day</span>
              </div>
            ))}
            {DASHBOARD_DATA.volume_spikes.length === 0 && (
              <div style={{ color: "#7C8A9C", fontSize: 13 }}>No significant spikes in current dataset.</div>
            )}
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="panel">
          <div className="panel-title"><HelpCircle size={15} color="#4D9FFF" />Top Recurring Questions</div>
          {DASHBOARD_DATA.top_questions.slice(0, 6).map((q, i) => (
            <div className="list-row" key={i}>
              <div className="list-row-top">
                <span className="list-tag">{q.game} · {q.platform}</span>
                <span className="list-eng">↑{q.engagement}</span>
              </div>
              <div className="list-text">{q.text}</div>
            </div>
          ))}
        </div>

        <div className="panel">
          <div className="panel-title"><Search size={15} color="#3ECF8E" />Highest-Engagement Signals</div>
          {DASHBOARD_DATA.top_posts.slice(0, 6).map((p, i) => (
            <div className="list-row" key={i}>
              <div className="list-row-top">
                <span className="list-tag" style={{ color: SENT_COLORS[p.sentiment_label] }}>
                  {p.game} · {p.sentiment_label}
                </span>
                <span className="list-eng">↑{p.engagement}</span>
              </div>
              <div className="list-text">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
