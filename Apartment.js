        // // // 분양 아파트
        /*
        var bounds = new naver.maps.LatLngBounds( // 별내자이
            new naver.maps.LatLng(37.6450122, 127.1211248),
            new naver.maps.LatLng(37.6426463, 127.1240162)
        );
        var bnxi = new naver.maps.GroundOverlay(
            "bnxi.png",
            bounds, {
                map:map,
                title:'grounOverlay',
                opacity: 1,
                clickable: false
            }
        );
        bnxi.setMap(map);

        var bounds = new naver.maps.LatLngBounds( // 감일푸르지오
            new naver.maps.LatLng(37.509403, 127.1542554),
            new naver.maps.LatLng(37.5115303, 127.1563207)
        );
        var gipr = new naver.maps.GroundOverlay(
            "gipr.png",
            bounds, {
                map:map,
                title:'grounOverlay',
                opacity: 1,
                clickable: false
            }
        );
        gipr.setMap(map);

        var bounds = new naver.maps.LatLngBounds( // 지정타
            new naver.maps.LatLng(37.4047761, 126.9737856),
            new naver.maps.LatLng(37.4193994, 126.9961875)
        );
        var jjt = new naver.maps.GroundOverlay(
            "jjt.png",
            bounds, {
                map:map,
                title:'grounOverlay',
                opacity: 1,
                clickable: false
            }
        );
        jjt.setMap(map);
        // // // 하단부터 주택 // // //
        // // // 하단부터 주택 // // //
        // // // 하단부터 주택 // // //
        // // // 하단부터 주택 // // //
        // // // 하단부터 주택 // // //

        var yeokchon_1 = new naver.maps.Polygon({ // 역촌1구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.6024023, 126.9074063),
                        new naver.maps.LatLng(37.6023938, 126.9071542),
                        new naver.maps.LatLng(37.603027, 126.9069611),
                        new naver.maps.LatLng(37.603078, 126.9066768),
                        new naver.maps.LatLng(37.6035838, 126.9067304),
                        new naver.maps.LatLng(37.603588, 126.9069343),
                        new naver.maps.LatLng(37.6043785, 126.9069879),
                        new naver.maps.LatLng(37.6043828, 126.9071918),
                        new naver.maps.LatLng(37.604608, 126.907342),
                        new naver.maps.LatLng(37.6038175, 126.9090479),
                        new naver.maps.LatLng(37.6034903, 126.9090318),
                        new naver.maps.LatLng(37.6034775, 126.908506),
                        new naver.maps.LatLng(37.6027508, 126.9084631),
                        new naver.maps.LatLng(37.6027593, 126.9074224),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_n = new naver.maps.Polygon({ // 은평뉴타운 대방노블랜드
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.6337298, 126.9320952),
                        new naver.maps.LatLng(37.6337425, 126.9321971),
                        new naver.maps.LatLng(37.6334961, 126.9329803),
                        new naver.maps.LatLng(37.6327612, 126.9332056),
                        new naver.maps.LatLng(37.6312997, 126.9330822),
                        new naver.maps.LatLng(37.631287, 126.9327818),
                        new naver.maps.LatLng(37.6317713, 126.9322186),
                        new naver.maps.LatLng(37.6320007, 126.9314783),
                        new naver.maps.LatLng(37.6328716, 126.9317089),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_n = new naver.maps.Polygon({ // 영등포 1-2 동부센트레빌
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5221977, 126.9093286),
                        new naver.maps.LatLng(37.5214851, 126.909857),
                        new naver.maps.LatLng(37.5214298, 126.9098382),
                        new naver.maps.LatLng(37.5212532, 126.9094547),
                        new naver.maps.LatLng(37.5220084, 126.9088753),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_n = new naver.maps.Polygon({ // 자양 코오롱하늘채
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5331898, 127.0847276),
                        new naver.maps.LatLng(37.532775, 127.0849583),
                        new naver.maps.LatLng(37.532741, 127.0848926),
                        new naver.maps.LatLng(37.5326198, 127.0847813),
                        new naver.maps.LatLng(37.5324783, 127.0846874),
                        new naver.maps.LatLng(37.5324145, 127.0847048),
                        new naver.maps.LatLng(37.532306, 127.0847933),
                        new naver.maps.LatLng(37.5322741, 127.0848014),
                        new naver.maps.LatLng(37.5320529, 127.0843092),
                        new naver.maps.LatLng(37.5324645, 127.0841241),
                        new naver.maps.LatLng(37.5325942, 127.0842757),
                        new naver.maps.LatLng(37.532792, 127.0842033),
                        new naver.maps.LatLng(37.5328622, 127.0843561),
                        new naver.maps.LatLng(37.532942, 127.0843253),
                        new naver.maps.LatLng(37.5330239, 127.0845466),
                        new naver.maps.LatLng(37.5331292, 127.0845037),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_n = new naver.maps.Polygon({ // 동선 2구역 계룡리슈빌
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5960733, 127.0188392),
                        new naver.maps.LatLng(37.5960351, 127.0188579),
                        new naver.maps.LatLng(37.5957376, 127.0197565),
                        new naver.maps.LatLng(37.5960712, 127.0201213),
                        new naver.maps.LatLng(37.5961413, 127.0200435),
                        new naver.maps.LatLng(37.596271, 127.0203519),
                        new naver.maps.LatLng(37.5960903, 127.020596),
                        new naver.maps.LatLng(37.596288, 127.020824),
                        new naver.maps.LatLng(37.5965685, 127.0210654),
                        new naver.maps.LatLng(37.5967534, 127.0211807),
                        new naver.maps.LatLng(37.5969085, 127.0212397),
                        new naver.maps.LatLng(37.5971572, 127.0213148),
                        new naver.maps.LatLng(37.5971763, 127.0212129),
                        new naver.maps.LatLng(37.5970913, 127.0211673),
                        new naver.maps.LatLng(37.5969192, 127.0207838),
                        new naver.maps.LatLng(37.5967555, 127.0205933),
                        new naver.maps.LatLng(37.5969362, 127.0203734),
                        new naver.maps.LatLng(37.596645, 127.0199442),
                        new naver.maps.LatLng(37.5967024, 127.0196438),
                        new naver.maps.LatLng(37.5965154, 127.0195687),
                        new naver.maps.LatLng(37.5965919, 127.0193568),
                        new naver.maps.LatLng(37.596577, 127.0192898),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_n = new naver.maps.Polygon({ // 천호4구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5399331, 127.1285053),

                        new naver.maps.LatLng(37.5397779, 127.1284114),
                        new naver.maps.LatLng(37.5397375, 127.1283926),
                        new naver.maps.LatLng(37.5397502, 127.1283363),
                        new naver.maps.LatLng(37.5396737, 127.1282907),
                        new naver.maps.LatLng(37.5389973, 127.1280171),
                        new naver.maps.LatLng(37.5388484, 127.1280118),
                        new naver.maps.LatLng(37.53874, 127.1280761),
                        new naver.maps.LatLng(37.5386528, 127.1282183),
                        new naver.maps.LatLng(37.5385666, 127.1285603),
                        new naver.maps.LatLng(37.5385847, 127.128634),
                        new naver.maps.LatLng(37.5385454, 127.1286676),
                        new naver.maps.LatLng(37.5384975, 127.128508),
                        new naver.maps.LatLng(37.5384061, 127.1292295),
                        new naver.maps.LatLng(37.5387868, 127.129495),
                        new naver.maps.LatLng(37.539008, 127.1296171),
                        new naver.maps.LatLng(37.5392408, 127.1296949),
                        new naver.maps.LatLng(37.53926, 127.1296841),
                        new naver.maps.LatLng(37.5397598, 127.1287802),
                        new naver.maps.LatLng(37.53983, 127.1286515),
                        new naver.maps.LatLng(37.5398619, 127.1286475),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var gocheok_I_PARK = new naver.maps.Polygon({ // 고척아이파크
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.4986781, 126.8569138),
                        new naver.maps.LatLng(37.4996421, 126.8571793),
                        new naver.maps.LatLng(37.5018732, 126.8591695),
                        new naver.maps.LatLng(37.5011438, 126.860284),
                        new naver.maps.LatLng(37.5010789, 126.8605508),
                        new naver.maps.LatLng(37.5009981, 126.860587),
                        new naver.maps.LatLng(37.5008395, 126.8607949),
                        new naver.maps.LatLng(37.5007236, 126.8607064),
                        new naver.maps.LatLng(37.4997437, 126.8595986),
                        new naver.maps.LatLng(37.4993436, 126.8600479),
                        new naver.maps.LatLng(37.499143, 126.8597985),
                        new naver.maps.LatLng(37.4975316, 126.8616707),
                        new naver.maps.LatLng(37.4969039, 126.8609076),
                        new naver.maps.LatLng(37.4971507, 126.8595718),
                        new naver.maps.LatLng(37.4977146, 126.8592325),
                        new naver.maps.LatLng(37.4980615, 126.8587524),
                        new naver.maps.LatLng(37.49817, 126.8584735),
                        new naver.maps.LatLng(37.4982509, 126.8584735),
                        new naver.maps.LatLng(37.4984956, 126.8579504),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var Ogum_anam_remodeling = new naver.maps.Polygon({ // 오금아남아파트 리모델링
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5023573, 127.1364804),
                        new naver.maps.LatLng(37.5023562, 127.1361029),
                        new naver.maps.LatLng(37.5023722, 127.135842),
                        new naver.maps.LatLng(37.5030887, 127.1356295),
                        new naver.maps.LatLng(37.5037164, 127.1361015),
                        new naver.maps.LatLng(37.5037324, 127.1361364),
                        new naver.maps.LatLng(37.503642, 127.1363899),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var Deokso_7 = new naver.maps.Polygon({ // 덕소7구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5842947, 127.2130957),
                        new naver.maps.LatLng(37.5831767, 127.2131896),
                        new naver.maps.LatLng(37.582843, 127.2137046),
                        new naver.maps.LatLng(37.5828812, 127.2139057),
                        new naver.maps.LatLng(37.5833807, 127.2147962),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var Godeok_Gangil_1_1 = new naver.maps.Polygon({ // 고덕강일 1지구 1블럭 제일건설 2020 말
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5627048, 127.1667384),
                        new naver.maps.LatLng(37.5641123, 127.1674948),
                        new naver.maps.LatLng(37.5648905, 127.1671568),
                        new naver.maps.LatLng(37.5642612, 127.1692275),
                        new naver.maps.LatLng(37.5636148, 127.1698551),
                        new naver.maps.LatLng(37.5624029, 127.1702414),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var Godeok_Gangil_2_5 = new naver.maps.Polygon({ // 고덕강일 2지구 5블럭 현대건설 2020 11
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5723569, 127.1742647),
                        new naver.maps.LatLng(37.5741129, 127.1735298),
                        new naver.maps.LatLng(37.5747379, 127.1758096),
                        new naver.maps.LatLng(37.5741086, 127.1761422),
                        new naver.maps.LatLng(37.5730925, 127.177022),                        
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3,
                clickable: true
            });
            naver.maps.Event.addListener(Godeok_Gangil_2_5, 'mouseover', function() {
                Godeok_Gangil_2_5.setOptions({
                    strokeColor: '#1E90FF',
                    fillOpacity: 0.5,
                    strokeOpacity: 1,
                    strokeWeight: 5,
                });
            });
            naver.maps.Event.addListener(Godeok_Gangil_2_5, 'mouseout', function() {
                Godeok_Gangil_2_5.setOptions({
                    fillOpacity: 0.3,
                    strokeColor: '#ff0000',
                    strokeOpacity: 0.6,
                    strokeWeight: 3,
                });
            });

            var Godeok_Gangil_3_10 = new naver.maps.Polygon({ // 고덕강일 3지구 10블럭 2021 상반기
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5566394, 127.1817069),
                        new naver.maps.LatLng(37.5566564, 127.1798079),
                        new naver.maps.LatLng(37.5555932, 127.1795719),
                        new naver.maps.LatLng(37.5555847, 127.1800118),
                        new naver.maps.LatLng(37.554513, 127.1799796),
                        new naver.maps.LatLng(37.5546661, 127.1815031),
                        new naver.maps.LatLng(37.5549808, 127.1815031),
                        new naver.maps.LatLng(37.5557804, 127.1816533),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var Seodaemoon_Yubora = new naver.maps.Polygon({ // 서대문영천반도유보라아파트
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5713652, 126.9593473),
                        new naver.maps.LatLng(37.5714332, 126.9596102),
                        new naver.maps.LatLng(37.5714492, 126.9598771),
                        new naver.maps.LatLng(37.5714067, 126.9600957),
                        new naver.maps.LatLng(37.5713386, 126.9602459),
                        new naver.maps.LatLng(37.5708667, 126.9608359),
                        new naver.maps.LatLng(37.5705648, 126.9605476),
                        new naver.maps.LatLng(37.5705074, 126.9601453),
                        new naver.maps.LatLng(37.5705297, 126.9599455),
                        new naver.maps.LatLng(37.5706562, 126.9597698),
                        new naver.maps.LatLng(37.5710602, 126.9594224),
                        new naver.maps.LatLng(37.5712749, 126.9593352),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var Sangdodong_jusangbokhab = new naver.maps.Polygon({ // 상도동 주상복합
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.4999315, 126.9306571),
                        new naver.maps.LatLng(37.5000602, 126.9309561),
                        new naver.maps.LatLng(37.5002049, 126.9312284),
                        new naver.maps.LatLng(37.5003666, 126.9315006),
                        new naver.maps.LatLng(37.5004379, 126.9314564),
                        new naver.maps.LatLng(37.5005092, 126.9312472),
                        new naver.maps.LatLng(37.5005039, 126.9309481),
                        new naver.maps.LatLng(37.5001879, 126.9307013),
                        new naver.maps.LatLng(37.49994, 126.9306423),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 고덕 아르테스미소지움
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 장위4구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.6167986, 127.0564728),
                        new naver.maps.LatLng(37.6163885, 127.0569314),
                        new naver.maps.LatLng(37.6141576, 127.0592167),
                        new naver.maps.LatLng(37.6136371, 127.0597183),
                        new naver.maps.LatLng(37.6125662, 127.0579158),
                        new naver.maps.LatLng(37.612341, 127.0581358),
                        new naver.maps.LatLng(37.6121923, 127.0577173),
                        new naver.maps.LatLng(37.6121753, 127.0575564),
                        new naver.maps.LatLng(37.6121753, 127.0571755),
                        new naver.maps.LatLng(37.6121923, 127.0569717),
                        new naver.maps.LatLng(37.6121115, 127.0569717),
                        new naver.maps.LatLng(37.6118056, 127.0568429),
                        new naver.maps.LatLng(37.6116016, 127.0564245),
                        new naver.maps.LatLng(37.6142872, 127.0535653),
                        new naver.maps.LatLng(37.6151307, 127.0549949),
                        new naver.maps.LatLng(37.6152965, 127.0551397),
                        new naver.maps.LatLng(37.6159806, 127.0554831),
                        new naver.maps.LatLng(37.616431, 127.0558532),
                        new naver.maps.LatLng(37.6166265, 127.0560839),
                        new naver.maps.LatLng(37.6167115, 127.0562073),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 장위10구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.614181, 127.0533587),
                        new naver.maps.LatLng(37.6124515, 127.0551853),
                        new naver.maps.LatLng(37.6123453, 127.0549573),
                        new naver.maps.LatLng(37.6118948, 127.054091),
                        new naver.maps.LatLng(37.6116972, 127.0538281),
                        new naver.maps.LatLng(37.6117036, 127.0537745),
                        new naver.maps.LatLng(37.6118714, 127.0537208),
                        new naver.maps.LatLng(37.611301, 127.0507007),
                        new naver.maps.LatLng(37.6114996, 127.0506484),
                        new naver.maps.LatLng(37.6115729, 127.0507248),
                        new naver.maps.LatLng(37.6127022, 127.0503721),
                        new naver.maps.LatLng(37.6126927, 127.0503305),
                        new naver.maps.LatLng(37.6126682, 127.0503346),
                        new naver.maps.LatLng(37.6126767, 127.050301),
                        new naver.maps.LatLng(37.6128233, 127.0500341),
                        new naver.maps.LatLng(37.6128573, 127.0499389),
                        new naver.maps.LatLng(37.6128807, 127.0496533),
                        new naver.maps.LatLng(37.6128584, 127.0494736),
                        new naver.maps.LatLng(37.6126162, 127.0490069),
                        new naver.maps.LatLng(37.6126215, 127.048968),
                        new naver.maps.LatLng(37.6133811, 127.0491168),
                        new naver.maps.LatLng(37.6134236, 127.0491396),
                        new naver.maps.LatLng(37.6134469, 127.0491691),
                        new naver.maps.LatLng(37.6134586, 127.049212),
                        new naver.maps.LatLng(37.6134607, 127.0492389),
                        new naver.maps.LatLng(37.6133492, 127.0498571),
                        new naver.maps.LatLng(37.6133311, 127.0500194),
                        new naver.maps.LatLng(37.6133237, 127.0501347),
                        new naver.maps.LatLng(37.6133269, 127.0502782),
                        new naver.maps.LatLng(37.6133524, 127.0504499),
                        new naver.maps.LatLng(37.6133938, 127.0506175),
                        new naver.maps.LatLng(37.613517, 127.051014),
                        new naver.maps.LatLng(37.6136625, 127.0514981),
                        new naver.maps.LatLng(37.6137794, 127.0519608),
                        new naver.maps.LatLng(37.6139334, 127.0525334),
                        new naver.maps.LatLng(37.6140237, 127.052925),
                        new naver.maps.LatLng(37.6140992, 127.0531597),
                        new naver.maps.LatLng(37.6141459, 127.053267),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 장위6구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.6137656, 127.0599913),
                        new naver.maps.LatLng(37.6165574, 127.0571267),
                        new naver.maps.LatLng(37.6167975, 127.0568826),
                        new naver.maps.LatLng(37.6170652, 127.0567298),
                        new naver.maps.LatLng(37.6172776, 127.0566466),
                        new naver.maps.LatLng(37.6173647, 127.0566573),
                        new naver.maps.LatLng(37.6175368, 127.05677),
                        new naver.maps.LatLng(37.6177174, 127.0570248),
                        new naver.maps.LatLng(37.6170822, 127.0577731),
                        new naver.maps.LatLng(37.6169101, 127.0580172),
                        new naver.maps.LatLng(37.6163152, 127.0591706),
                        new naver.maps.LatLng(37.6157436, 127.0602515),
                        new naver.maps.LatLng(37.6156948, 127.0603186),
                        new naver.maps.LatLng(37.6156119, 127.0604661),
                        new naver.maps.LatLng(37.615563, 127.0605465),
                        new naver.maps.LatLng(37.6154356, 127.0608765),
                        new naver.maps.LatLng(37.6153633, 127.0611447),
                        new naver.maps.LatLng(37.6153431, 127.0612479),
                        new naver.maps.LatLng(37.6152858, 127.0615242),
                        new naver.maps.LatLng(37.6151541, 127.0623865),
                        new naver.maps.LatLng(37.6151551, 127.0624576),
                        new naver.maps.LatLng(37.6151232, 127.0627017),
                        new naver.maps.LatLng(37.6151434, 127.0630571),
                        new naver.maps.LatLng(37.6150861, 127.0636157),
                        new naver.maps.LatLng(37.6150882, 127.0642004),
                        new naver.maps.LatLng(37.6150701, 127.0643264),
                        new naver.maps.LatLng(37.6150181, 127.0643935),
                        new naver.maps.LatLng(37.6148598, 127.0644297),
                        new naver.maps.LatLng(37.6147599, 127.0640636),
                        new naver.maps.LatLng(37.6144858, 127.063322),
                        new naver.maps.LatLng(37.6143701, 127.0630967),
                        new naver.maps.LatLng(37.6142999, 127.0629558),
                        new naver.maps.LatLng(37.6141321, 127.0625468),
                        new naver.maps.LatLng(37.61367, 127.0617234),
                        new naver.maps.LatLng(37.6136689, 127.0616925),
                        new naver.maps.LatLng(37.6138378, 127.0612795),
                        new naver.maps.LatLng(37.6138676, 127.0612057),
                        new naver.maps.LatLng(37.6140822, 127.0607202),
                        new naver.maps.LatLng(37.6141183, 127.060629),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 이문1구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.6025595, 127.0619391),
                        new naver.maps.LatLng(37.600426, 127.0619069),
                        new naver.maps.LatLng(37.5998692, 127.0618318),
                        new naver.maps.LatLng(37.5998862, 127.0616977),
                        new naver.maps.LatLng(37.5993209, 127.0615153),
                        new naver.maps.LatLng(37.5989639, 127.0613276),
                        new naver.maps.LatLng(37.5989639, 127.0612578),
                        new naver.maps.LatLng(37.5983094, 127.060877),
                        new naver.maps.LatLng(37.5982669, 127.0609467),
                        new naver.maps.LatLng(37.5978758, 127.060716),
                        new naver.maps.LatLng(37.5977866, 127.0609628),
                        new naver.maps.LatLng(37.5975911, 127.0608394),
                        new naver.maps.LatLng(37.5977611, 127.0605122),
                        new naver.maps.LatLng(37.5979396, 127.0600777),
                        new naver.maps.LatLng(37.5981479, 127.0597665),
                        new naver.maps.LatLng(37.5983944, 127.0592006),
                        new naver.maps.LatLng(37.5985686, 127.058691),
                        new naver.maps.LatLng(37.5996503, 127.0589324),
                        new naver.maps.LatLng(37.5996184, 127.0591496),
                        new naver.maps.LatLng(37.6000647, 127.0592918),
                        new naver.maps.LatLng(37.6001157, 127.058927),
                        new naver.maps.LatLng(37.6001795, 127.0581384),
                        new naver.maps.LatLng(37.60114, 127.0582645),
                        new naver.maps.LatLng(37.6010911, 127.0591899),
                        new naver.maps.LatLng(37.601242, 127.0592274),
                        new naver.maps.LatLng(37.6013695, 127.0593776),
                        new naver.maps.LatLng(37.6014269, 127.0595412),
                        new naver.maps.LatLng(37.6015395, 127.0596888),
                        new naver.maps.LatLng(37.601616, 127.0601179),
                        new naver.maps.LatLng(37.6017308, 127.0601903),
                        new naver.maps.LatLng(37.6018498, 127.060539),
                        new naver.maps.LatLng(37.6019688, 127.0604532),
                        new naver.maps.LatLng(37.6020835, 127.0600133),
                        new naver.maps.LatLng(37.6022726, 127.0599275),
                        new naver.maps.LatLng(37.6024448, 127.059965),
                        new naver.maps.LatLng(37.6025595, 127.0600589),
                        new naver.maps.LatLng(37.6028379, 127.0601367),
                        new naver.maps.LatLng(37.6030568, 127.0601018),
                        new naver.maps.LatLng(37.6034138, 127.0604103),
                        new naver.maps.LatLng(37.6035455, 127.0607429),
                        new naver.maps.LatLng(37.6030376, 127.0613303),
                        new naver.maps.LatLng(37.6028081, 127.0613195),
                        new naver.maps.LatLng(37.602619, 127.0614832),

                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 이문3구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.6008156, 127.062177),
                        new naver.maps.LatLng(37.5997955, 127.0620858),
                        new naver.maps.LatLng(37.5996085, 127.0627831),
                        new naver.maps.LatLng(37.5995575, 127.0627724),
                        new naver.maps.LatLng(37.5997275, 127.0620589),
                        new naver.maps.LatLng(37.5991027, 127.0619195),
                        new naver.maps.LatLng(37.59892, 127.0622145),
                        new naver.maps.LatLng(37.5987967, 127.0622681),
                        new naver.maps.LatLng(37.5986352, 127.062177),
                        new naver.maps.LatLng(37.5985757, 127.0622735),
                        new naver.maps.LatLng(37.5983122, 127.0620911),
                        new naver.maps.LatLng(37.5980784, 127.0619356),
                        new naver.maps.LatLng(37.5981082, 127.0617102),
                        new naver.maps.LatLng(37.5975939, 127.0613401),
                        new naver.maps.LatLng(37.5976534, 127.0611684),
                        new naver.maps.LatLng(37.5973346, 127.0609431),
                        new naver.maps.LatLng(37.5964761, 127.061442),
                        new naver.maps.LatLng(37.596068, 127.0622842),
                        new naver.maps.LatLng(37.5961233, 127.0623379),
                        new naver.maps.LatLng(37.595813, 127.0630728),
                        new naver.maps.LatLng(37.5966036, 127.0636683),
                        new naver.maps.LatLng(37.5965653, 127.0637219),
                        new naver.maps.LatLng(37.5994746, 127.0658784),
                        new naver.maps.LatLng(37.5995235, 127.0650657),
                        new naver.maps.LatLng(37.6000803, 127.065055),
                        new naver.maps.LatLng(37.6004416, 127.0647063),
                        new naver.maps.LatLng(37.6008581, 127.064717),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 이문4구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5960595, 127.0637755),
                        new naver.maps.LatLng(37.5955665, 127.0634161),
                        new naver.maps.LatLng(37.595592, 127.0638882),
                        new naver.maps.LatLng(37.5955027, 127.063856),
                        new naver.maps.LatLng(37.5954092, 127.0640438),
                        new naver.maps.LatLng(37.5954305, 127.0642154),
                        new naver.maps.LatLng(37.5951542, 127.0648913),
                        new naver.maps.LatLng(37.5948396, 127.0647197),
                        new naver.maps.LatLng(37.5946909, 127.064709),
                        new naver.maps.LatLng(37.5939045, 127.0682817),
                        new naver.maps.LatLng(37.5939428, 127.0683621),
                        new naver.maps.LatLng(37.5952902, 127.0680349),
                        new naver.maps.LatLng(37.5949799, 127.0678096),
                        new naver.maps.LatLng(37.5949842, 127.0676272),
                        new naver.maps.LatLng(37.5950734, 127.0675306),
                        new naver.maps.LatLng(37.5952774, 127.0673),
                        new naver.maps.LatLng(37.5955282, 127.0673107),
                        new naver.maps.LatLng(37.595796, 127.0672839),
                        new naver.maps.LatLng(37.5961275, 127.0671927),
                        new naver.maps.LatLng(37.5966503, 127.0669352),
                        new naver.maps.LatLng(37.5967481, 127.0677399),
                        new naver.maps.LatLng(37.6015083, 127.0673965),
                        new naver.maps.LatLng(37.6012108, 127.067241),
                        new naver.maps.LatLng(37.6005436, 127.0668655),
                        new naver.maps.LatLng(37.5975939, 127.0647706),
                        new naver.maps.LatLng(37.5970924, 127.0650684),
                        new naver.maps.LatLng(37.5965441, 127.0657175),
                        new naver.maps.LatLng(37.5964399, 127.0657953),
                        new naver.maps.LatLng(37.5958449, 127.0653929),
                        new naver.maps.LatLng(37.5961552, 127.0646848),
                        new naver.maps.LatLng(37.5958194, 127.064371),

                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 휘경3구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(37.5939853, 127.06443),
                        new naver.maps.LatLng(37.5936708, 127.0644086),
                        new naver.maps.LatLng(37.5926846, 127.0654278),
                        new naver.maps.LatLng(37.5921703, 127.062928),
                        new naver.maps.LatLng(37.5918388, 127.061898),
                        new naver.maps.LatLng(37.5907846, 127.0598917),
                        new naver.maps.LatLng(37.5914477, 127.0604925),
                        new naver.maps.LatLng(37.5945336, 127.0626705),
                        new naver.maps.LatLng(37.5944571, 127.0628314),
                        new naver.maps.LatLng(37.5945166, 127.0631855),
                        new naver.maps.LatLng(37.5941766, 127.0632498),
                        new naver.maps.LatLng(37.5940066, 127.0633464),

                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 광명2R구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 남양주도농반도유보라
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 덕소2구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 덕소6A구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 과천지정타S1 푸르지오 오르투스
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 과천지정타S4 푸르지오 어우림 라비엔오
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 과천지정타S5 푸르지도 데시앙
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 과천지정타S8 신동아/우미
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 홍은13구역
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 신정뉴타운 1-3지구
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            var name_ = new naver.maps.Polygon({ // 
                map: map,
                paths: [
                    [
                        new naver.maps.LatLng(),
                    ]
                ],
                fillColor: '#ff0000',
                fillOpacity: 0.3,
                strokeColor: '#ff0000',
                strokeOpacity: 0.6,
                strokeWeight: 3
            });
            */