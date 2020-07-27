/*
 * client side
 *
 * Furniture catalog example
 * Мебельщикам всех стран посвящается!!!
 * Backbone
 * Underscore
 * <a href="xyz"> SPA type link
 * <a data-bypass href="xyz"> regular link
 *
 * andy-pro 2016
 */

/*
backcat = ('Выбрать другую кухню', 'Выбрать другую кухню', 'Выбрать другой шкаф-купе', 'Выбрать другую прихожую', 'Выбрать другую гостиную', 'Выбрать другую офисную', 'Выбрать другую детскую', 'Выбрать другое разное')
*/

var file_list = {
  "Кухня классика": {
    "Andrey Bolohov": {
      "Кухня классика": {
        "titular": "_IMGP0008.jpg",
        "images": [
          "IMGP0003.jpg",
          "IMGP0004.jpg",
          "IMGP0005.jpg",
          "IMGP0006.jpg",
          "IMGP0007.jpg",
          "IMGP0009.jpg",
          "IMGP0012.jpg",
          "_IMGP0008.jpg"
        ]
      }
    },
    "Борис Зоологическая 89": {
      "Кухня классика": {
        "titular": "_IMGP6761.jpg",
        "images": [
          "IMGP6757.jpg",
          "IMGP6758.jpg",
          "IMGP6759.jpg",
          "IMGP6760.jpg",
          "_IMGP6761.jpg"
        ]
      }
    },
    "ГБ21": {
      "Кухня классика": {
        "titular": "_IMGP5049.jpg",
        "images": [
          "IMGP5048.jpg",
          "_IMGP5049.jpg"
        ]
      }
    },
    "Женя Костылев Ясиноватая": {
      "Кухня классика": {
        "titular": "_DSCN0376.jpg",
        "images": [
          "DSCN0372.jpg",
          "DSCN0380.jpg",
          "DSCN0381.jpg",
          "DSCN0382.jpg",
          "DSCN0383.jpg",
          "DSCN0384.jpg",
          "DSCN0386.jpg",
          "DSCN0388.jpg",
          "DSCN0389.jpg",
          "DSCN0390.jpg",
          "_DSCN0376.jpg"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Кухня классика": {
        "titular": "_IMGP6814.jpg",
        "images": [
          "DSCN0220.jpg",
          "DSCN0221.jpg",
          "DSCN0223.jpg",
          "IMGP6802.jpg",
          "IMGP6803.jpg",
          "IMGP6805.jpg",
          "IMGP6807.jpg",
          "IMGP6808.jpg",
          "IMGP6809.jpg",
          "IMGP6810.jpg",
          "IMGP6811.jpg",
          "IMGP6812.jpg",
          "IMGP6815.jpg",
          "IMGP6816.jpg",
          "IMGP6817.jpg",
          "IMGP6818.jpg",
          "_IMGP6814.jpg"
        ]
      },
      "Кухня классика 2": {
        "titular": "_DSCN0002.jpg",
        "images": [
          "DSCN0007.jpg",
          "DSCN0008.jpg",
          "DSCN0010.jpg",
          "DSCN0011.jpg",
          "DSCN0012.jpg",
          "DSCN0013.jpg",
          "DSCN0014.jpg",
          "DSCN0015.jpg",
          "DSCN0016.jpg",
          "DSCN0017.jpg",
          "DSCN0018.jpg",
          "DSCN0019.jpg",
          "DSCN0020.jpg",
          "_DSCN0002.jpg"
        ]
      }
    },
    "Кошелюк СА": {
      "Кухня классика дача": {
        "titular": "_IMGP5044.jpg",
        "images": [
          "IMGP5042.jpg",
          "IMGP5043.jpg",
          "IMGP5045.jpg",
          "IMGP5046.jpg",
          "IMGP5047.jpg",
          "_IMGP5044.jpg"
        ]
      },
      "Кухня классика дом": {
        "titular": "_IMGP5067.jpg",
        "images": [
          "IMGP5021.jpg",
          "IMGP5022.jpg",
          "IMGP5026.jpg",
          "IMGP5027.jpg",
          "IMGP5030.jpg",
          "IMGP5031.jpg",
          "IMGP5032.jpg",
          "IMGP5033.jpg",
          "IMGP5034.jpg",
          "IMGP5035.jpg",
          "IMGP5036.jpg",
          "IMGP5037.jpg",
          "IMGP5066.jpg",
          "IMGP5068.jpg",
          "IMGP5069.jpg",
          "IMGP5070.jpg",
          "IMGP5071.jpg",
          "IMGP5072.jpg",
          "IMGP5073.jpg",
          "IMGP5074.jpg",
          "IMGP5075.jpg",
          "IMGP5076.jpg",
          "IMGP5077.jpg",
          "IMGP5078.jpg",
          "IMGP5079.jpg",
          "IMGP5080.jpg",
          "IMGP5081.jpg",
          "IMGP5082.jpg",
          "IMGP5083.jpg",
          "IMGP5084.jpg",
          "_IMGP5067.jpg"
        ]
      }
    },
    "Кравчук Дима": {
      "Кухня классика": {
        "titular": "DSCN0446.jpg",
        "images": [
          "DSCN0446.jpg",
          "DSCN0447.jpg",
          "DSCN0449.jpg",
          "DSCN0450.jpg",
          "DSCN0451.jpg",
          "DSCN0452.jpg",
          "DSCN0453.jpg",
          "DSCN0454.jpg",
          "DSCN0455.jpg",
          "DSCN0456.jpg",
          "DSCN0457.jpg",
          "DSCN0459.jpg",
          "DSCN0460.jpg",
          "DSCN0461.jpg",
          "DSCN0462.jpg"
        ]
      }
    },
    "Крымский Ясиноватая": {
      "Кухня классика": {
        "titular": "_IMGP6756.jpg",
        "images": [
          "IMGP6732.jpg",
          "IMGP6733.jpg",
          "IMGP6734.jpg",
          "IMGP6735.jpg",
          "IMGP6736.jpg",
          "IMGP6737.jpg",
          "IMGP6738.jpg",
          "IMGP6740.jpg",
          "IMGP6741.jpg",
          "IMGP6742.jpg",
          "IMGP6743.jpg",
          "IMGP6745.jpg",
          "IMGP6746.jpg",
          "IMGP6747.jpg",
          "IMGP6748.jpg",
          "IMGP6749.jpg",
          "IMGP6750.jpg",
          "IMGP6751.jpg",
          "IMGP6752.jpg",
          "IMGP6753.jpg",
          "IMGP6754.jpg",
          "_IMGP6756.jpg"
        ]
      }
    },
    "Львов_Светлана_Григоровича_4": {
      "Кухня классика": {
        "titular": "_IMG_20181224_200243.jpg",
        "images": [
          "IMG_20181219_215048.jpg",
          "IMG_20181219_215059.jpg",
          "IMG_20181219_215122.jpg",
          "IMG_20181219_215137.jpg",
          "IMG_20181224_200209.jpg",
          "IMG_20181224_200253.jpg",
          "IMG_20181224_200307.jpg",
          "IMG_20181224_200319.jpg",
          "IMG_20181224_200407.jpg",
          "IMG_20181224_200419.jpg",
          "IMG_20181224_200429.jpg",
          "IMG_20181224_200508.jpg",
          "IMG_20190104_151439.jpg",
          "IMG_20190104_151446.jpg",
          "IMG_20190104_151520.jpg",
          "IMG_20190104_151825.jpg",
          "IMG_20190104_151837.jpg",
          "IMG_20190104_151900.jpg",
          "IMG_20190104_151957.jpg",
          "IMG_20190104_152444.jpg",
          "IMG_20190112_173324.jpg",
          "_IMG_20181224_200243.jpg"
        ]
      }
    },
    "РККА-5-24": {
      "Кухня классика": {
        "titular": "_IMGP4537.jpg",
        "images": [
          "IMGP4538.jpg",
          "IMGP4539.jpg",
          "IMGP4540.jpg",
          "IMGP4541.jpg",
          "_IMGP4537.jpg"
        ]
      }
    },
    "Саша Шаповал Скотоватая": {
      "Кухня классика": {
        "titular": "_IMGP5463.jpg",
        "images": [
          "IMGP5457.jpg",
          "IMGP5458.jpg",
          "IMGP5459.jpg",
          "IMGP5460.jpg",
          "IMGP5461.jpg",
          "IMGP5462.jpg",
          "IMGP5464.jpg",
          "IMGP5465.jpg",
          "IMGP5466.jpg",
          "IMGP5467.jpg",
          "IMGP5469.jpg",
          "IMGP5470.jpg",
          "IMGP5471.jpg",
          "IMGP5472.jpg",
          "IMGP5474.jpg",
          "_IMGP5463.jpg"
        ]
      }
    },
    "Сергей-Ильича-20-211": {
      "Кухня классика": {
        "titular": "_IMGP5182.jpg",
        "images": [
          "IMGP5179.jpg",
          "IMGP5180.jpg",
          "IMGP5183.jpg",
          "IMGP5184.jpg",
          "IMGP5185.jpg",
          "IMGP5186.jpg",
          "IMGP5187.jpg",
          "IMGP5188.jpg",
          "_IMGP5182.jpg"
        ]
      }
    },
    "Тёща": {
      "Кухня классика": {
        "titular": "_IMGP3300.jpg",
        "images": [
          "IMGP3301.jpg",
          "IMGP3302.jpg",
          "IMGP3303.jpg",
          "IMGP3304.jpg",
          "IMGP3305.jpg",
          "_IMGP3300.jpg"
        ]
      }
    },
    "Фролова": {
      "Кухня классика": {
        "titular": "_IMGP4949.jpg",
        "images": [
          "IMGP4950.jpg",
          "IMGP4951.jpg",
          "IMGP4952.jpg",
          "IMGP4953.jpg",
          "IMGP4954.jpg",
          "IMGP4955.jpg",
          "IMGP4956.jpg",
          "IMGP4957.jpg",
          "IMGP4958.jpg",
          "IMGP4959.jpg",
          "IMGP4960.jpg",
          "_IMGP4949.jpg"
        ]
      }
    }
  },
  "Кухня модерн": {
    "Andrey Bolohov": {
      "Кухня модерн": {
        "titular": "DSC00125.jpg",
        "images": [
          "DSC00125.jpg",
          "DSC00127.jpg",
          "DSC00128.jpg"
        ]
      }
    },
    "Алексей Текстильщик": {
      "Кухня модерн": {
        "titular": "_IMGP6173.jpg",
        "images": [
          "IMGP6165.jpg",
          "IMGP6166.jpg",
          "IMGP6167.jpg",
          "IMGP6168.jpg",
          "IMGP6169.jpg",
          "IMGP6170.jpg",
          "IMGP6171.jpg",
          "IMGP6172.jpg",
          "IMGP6174.jpg",
          "IMGP6175.jpg",
          "IMGP6176.jpg",
          "IMGP6177.jpg",
          "IMGP6178.jpg",
          "IMGP6179.jpg",
          "IMGP6180.jpg",
          "IMGP6181.jpg",
          "IMGP6182.jpg",
          "IMGP6183.jpg",
          "IMGP6184.jpg",
          "IMGP6185.jpg",
          "IMGP6186.jpg",
          "IMGP6187.jpg",
          "IMGP6188.jpg",
          "IMGP6189.jpg",
          "IMGP6190.jpg",
          "IMGP6191.jpg",
          "_IMGP6173.jpg"
        ]
      }
    },
    "Алексей Топаз": {
      "Кухня модерн": {
        "titular": "_DSCN0960.jpg",
        "images": [
          "DSCN0941.jpg",
          "DSCN0943.jpg",
          "DSCN0945.jpg",
          "DSCN0948.jpg",
          "DSCN0949.jpg",
          "DSCN0950.jpg",
          "DSCN0951.jpg",
          "DSCN0952.jpg",
          "DSCN0954.jpg",
          "DSCN0956.jpg",
          "DSCN0963.jpg",
          "_DSCN0960.jpg"
        ]
      }
    },
    "Алик": {
      "Кухня модерн": {
        "titular": "_IMGP5812.jpg",
        "images": [
          "IMGP5789.jpg",
          "IMGP5790.jpg",
          "IMGP5791.jpg",
          "IMGP5792.jpg",
          "IMGP5793.jpg",
          "IMGP5794.jpg",
          "IMGP5795.jpg",
          "IMGP5796.jpg",
          "IMGP5797.jpg",
          "IMGP5798.jpg",
          "IMGP5799.jpg",
          "IMGP5800.jpg",
          "IMGP5801.jpg",
          "IMGP5803.jpg",
          "IMGP5805.jpg",
          "IMGP5806.jpg",
          "IMGP5807.jpg",
          "IMGP5808.jpg",
          "IMGP5809.jpg",
          "IMGP5810.jpg",
          "IMGP5811.jpg",
          "IMGP5815.jpg",
          "IMGP5816.jpg",
          "IMGP5817.jpg",
          "IMGP5818.jpg",
          "_IMGP5812.jpg"
        ]
      }
    },
    "Алла Шевченко 18": {
      "Кухня модерн": {
        "titular": "_IMGP6012.jpg",
        "images": [
          "IMGP6010.jpg",
          "IMGP6011.jpg",
          "IMGP6014.jpg",
          "IMGP6015.jpg",
          "IMGP6016.jpg",
          "IMGP6017.jpg",
          "IMGP6018.jpg",
          "IMGP6019.jpg",
          "IMGP6020.jpg",
          "IMGP6021.jpg",
          "IMGP6022.jpg",
          "IMGP6023.jpg",
          "IMGP6024.jpg",
          "IMGP6025.jpg",
          "IMGP6026.jpg",
          "IMGP6027.jpg",
          "IMGP6028.jpg",
          "IMGP6029.jpg",
          "IMGP6030.jpg",
          "IMGP6031.jpg",
          "IMGP6033.jpg",
          "IMGP6034.jpg",
          "IMGP6035.jpg",
          "IMGP6036.jpg",
          "_IMGP6012.jpg"
        ]
      }
    },
    "Братуха": {
      "Кухня модерн": {
        "titular": "_IMGP5429.jpg",
        "images": [
          "IMGP5426.jpg",
          "IMGP5427.jpg",
          "IMGP5428.jpg",
          "IMGP5431.jpg",
          "IMGP5432.jpg",
          "IMGP5434.jpg",
          "IMGP5435.jpg",
          "IMGP5436.jpg",
          "IMGP5437.jpg",
          "IMGP5438.jpg",
          "IMGP5439.jpg",
          "IMGP5440.jpg",
          "IMGP5441.jpg",
          "IMGP5442.jpg",
          "IMGP5443.jpg",
          "IMGP5445.jpg",
          "IMGP5446.jpg",
          "IMGP5447.jpg",
          "IMGP5448.jpg",
          "IMGP5449.jpg",
          "IMGP5450.jpg",
          "IMGP5451.jpg",
          "IMGP5452.jpg",
          "IMGP5453.jpg",
          "IMGP5454.jpg",
          "IMGP5456.jpg",
          "_IMGP5429.jpg"
        ]
      }
    },
    "Валентина Гвардейка": {
      "Кухня модерн": {
        "titular": "_IMGP5848.jpg",
        "images": [
          "IMGP5824.jpg",
          "IMGP5825.jpg",
          "IMGP5826.jpg",
          "IMGP5827.jpg",
          "IMGP5828.jpg",
          "IMGP5829.jpg",
          "IMGP5830.jpg",
          "IMGP5831.jpg",
          "IMGP5832.jpg",
          "IMGP5833.jpg",
          "IMGP5834.jpg",
          "IMGP5835.jpg",
          "IMGP5836.jpg",
          "IMGP5837.jpg",
          "IMGP5838.jpg",
          "IMGP5839.jpg",
          "IMGP5840.jpg",
          "IMGP5841.jpg",
          "IMGP5843.jpg",
          "IMGP5844.jpg",
          "IMGP5845.jpg",
          "IMGP5846.jpg",
          "IMGP5847.jpg",
          "_IMGP5848.jpg"
        ]
      }
    },
    "Виталик Краснооктябрьская": {
      "Кухня модерн": {
        "titular": "_IMGP7172.jpg",
        "images": [
          "IMGP7173.jpg",
          "IMGP7175.jpg",
          "IMGP7176.jpg",
          "IMGP7177.jpg",
          "IMGP7178.jpg",
          "IMGP7179.jpg",
          "IMGP7180.jpg",
          "IMGP7181.jpg",
          "IMGP7182.jpg",
          "IMGP7183.jpg",
          "_IMGP7172.jpg"
        ]
      }
    },
    "Детсад Лариса Викторовна": {
      "Кухня модерн": {
        "titular": "_IMGP6913.jpg",
        "images": [
          "IMGP6911.jpg",
          "IMGP6912.jpg",
          "IMGP6914.jpg",
          "IMGP6915.jpg",
          "IMGP6916.jpg",
          "IMGP6917.jpg",
          "IMGP6918.jpg",
          "IMGP6919.jpg",
          "IMGP6920.jpg",
          "IMGP6921.jpg",
          "_IMGP6913.jpg"
        ]
      }
    },
    "Женя косметолог": {
      "Кухня модерн": {
        "titular": "_IMGP6088.jpg",
        "images": [
          "IMGP6086.jpg",
          "IMGP6087.jpg",
          "IMGP6089.jpg",
          "IMGP6090.jpg",
          "IMGP6091.jpg",
          "IMGP6092.jpg",
          "IMGP6093.jpg",
          "IMGP6094.jpg",
          "IMGP6095.jpg",
          "IMGP6096.jpg",
          "IMGP6097.jpg",
          "IMGP6098.jpg",
          "IMGP6099.jpg",
          "IMGP6100.jpg",
          "IMGP6101.jpg",
          "IMGP6102.jpg",
          "IMGP6103.jpg",
          "IMGP6104.jpg",
          "IMGP6105.jpg",
          "IMGP6106.jpg",
          "IMGP6107.jpg",
          "IMGP6108.jpg",
          "IMGP6122.jpg",
          "IMGP6123.jpg",
          "IMGP6124.jpg",
          "IMGP6125.jpg",
          "IMGP6126.jpg",
          "IMGP6127.jpg",
          "IMGP6128.jpg",
          "IMGP6129.jpg",
          "IMGP6130.jpg",
          "IMGP6131.jpg",
          "IMGP6132.jpg",
          "IMGP6133.jpg",
          "_IMGP6088.jpg"
        ]
      }
    },
    "Женя Лидиевка": {
      "Кухня модерн": {
        "titular": "_IMGP5546.jpg",
        "images": [
          "IMGP5539.jpg",
          "IMGP5540.jpg",
          "IMGP5541.jpg",
          "IMGP5543.jpg",
          "IMGP5544.jpg",
          "IMGP5545.jpg",
          "IMGP5547.jpg",
          "IMGP5548.jpg",
          "IMGP5549.jpg",
          "IMGP5550.jpg",
          "IMGP5551.jpg",
          "IMGP5552.jpg",
          "IMGP5553.jpg",
          "IMGP5554.jpg",
          "IMGP5555.jpg",
          "IMGP5556.jpg",
          "_IMGP5546.jpg"
        ]
      }
    },
    "Ирина Степановна Варейкиса 10": {
      "Кухня модерн": {
        "titular": "DSCN0132.jpg",
        "images": [
          "DSCN0132.jpg",
          "DSCN0133.jpg",
          "DSCN0134.jpg",
          "DSCN0138.jpg",
          "DSCN0145.jpg",
          "DSCN0147.jpg",
          "DSCN0148.jpg",
          "DSCN0149.jpg",
          "DSCN0150.jpg",
          "DSCN0152.jpg",
          "DSCN0155.jpg",
          "DSCN0156.jpg",
          "DSCN0157.jpg",
          "DSCN0158.jpg",
          "DSCN0159.jpg",
          "DSCN0160.jpg",
          "DSCN0161.jpg",
          "DSCN0162.jpg",
          "DSCN0163.jpg",
          "DSCN0170.jpg",
          "DSCN0198.jpg",
          "DSCN0203.jpg",
          "DSCN0204.jpg"
        ]
      }
    },
    "Катя Топаз": {
      "Кухня модерн": {
        "titular": "_IMGP5387.jpg",
        "images": [
          "IMGP5379.jpg",
          "IMGP5380.jpg",
          "IMGP5381.jpg",
          "IMGP5382.jpg",
          "IMGP5383.jpg",
          "IMGP5384.jpg",
          "IMGP5385.jpg",
          "IMGP5386.jpg",
          "IMGP5388.jpg",
          "IMGP5389.jpg",
          "IMGP5390.jpg",
          "IMGP5391.jpg",
          "IMGP5392.jpg",
          "IMGP5393.jpg",
          "IMGP5394.jpg",
          "IMGP5395.jpg",
          "IMGP5396.jpg",
          "IMGP5397.jpg",
          "IMGP5398.jpg",
          "IMGP5400.jpg",
          "IMGP5401.jpg",
          "IMGP5978.jpg",
          "IMGP5979.jpg",
          "IMGP5980.jpg",
          "IMGP5981.jpg",
          "_IMGP5387.jpg"
        ]
      }
    },
    "Лиля": {
      "Кухня модерн": {
        "titular": "_IMGP5363.jpg",
        "images": [
          "IMGP5364.jpg",
          "IMGP5365.jpg",
          "IMGP5366.jpg",
          "IMGP5367.jpg",
          "IMGP5368.jpg",
          "IMGP5369.jpg",
          "IMGP5370.jpg",
          "IMGP5371.jpg",
          "IMGP5372.jpg",
          "IMGP5373.jpg",
          "IMGP5374.jpg",
          "IMGP5375.jpg",
          "IMGP5376.jpg",
          "IMGP5378.jpg",
          "_IMGP5363.jpg"
        ]
      }
    },
    "Лузина 12-51": {
      "Кухня модерн": {
        "titular": "_IMGP6212.jpg",
        "images": [
          "IMGP6211.jpg",
          "IMGP6213.jpg",
          "IMGP6214.jpg",
          "IMGP6215.jpg",
          "IMGP6216.jpg",
          "IMGP6217.jpg",
          "IMGP6218.jpg",
          "IMGP6219.jpg",
          "IMGP6220.jpg",
          "IMGP6221.jpg",
          "IMGP6222.jpg",
          "IMGP6223.jpg",
          "IMGP6224.jpg",
          "IMGP6225.jpg",
          "IMGP6226.jpg",
          "IMGP6227.jpg",
          "IMGP6228.jpg",
          "IMGP6229.jpg",
          "IMGP6230.jpg",
          "IMGP6231.jpg",
          "_IMGP6212.jpg"
        ]
      }
    },
    "Лузина 14-39": {
      "Кухня модерн": {
        "titular": "_IMGP5623.jpg",
        "images": [
          "IMGP5619.jpg",
          "IMGP5620.jpg",
          "IMGP5621.jpg",
          "IMGP5622.jpg",
          "IMGP5624.jpg",
          "IMGP5625.jpg",
          "IMGP5626.jpg",
          "IMGP5627.jpg",
          "IMGP5628.jpg",
          "IMGP5629.jpg",
          "IMGP5630.jpg",
          "IMGP5631.jpg",
          "IMGP5632.jpg",
          "IMGP5633.jpg",
          "IMGP5634.jpg",
          "IMGP5635.jpg",
          "IMGP5636.jpg",
          "IMGP5637.jpg",
          "IMGP5638.jpg",
          "_IMGP5623.jpg"
        ]
      }
    },
    "Люда Авдеевка": {
      "Кухня модерн": {
        "titular": "_IMGP6853.jpg",
        "images": [
          "IMGP6848.jpg",
          "IMGP6849.jpg",
          "IMGP6851.jpg",
          "IMGP6852.jpg",
          "IMGP6854.jpg",
          "IMGP6855.jpg",
          "IMGP6856.jpg",
          "IMGP6857.jpg",
          "IMGP6858.jpg",
          "IMGP6859.jpg",
          "IMGP6860.jpg",
          "IMGP6861.jpg",
          "IMGP6862.jpg",
          "IMGP6863.jpg",
          "IMGP6864.jpg",
          "IMGP6865.jpg",
          "IMGP6867.jpg",
          "IMGP6868.jpg",
          "IMGP6869.jpg",
          "IMGP6870.jpg",
          "IMGP6871.jpg",
          "_IMGP6853.jpg",
          "xxx0056.jpg"
        ]
      }
    },
    "Наташа Магистральный": {
      "Кухня модерн": {
        "titular": "_IMGP5558.jpg",
        "images": [
          "IMGP5557.jpg",
          "IMGP5559.jpg",
          "IMGP5560.jpg",
          "IMGP5561.jpg",
          "_IMGP5558.jpg"
        ]
      }
    },
    "Олег Телецентр": {
      "Кухня модерн": {
        "titular": "_IMGP6821.jpg",
        "images": [
          "IMGP6819.jpg",
          "IMGP6820.jpg",
          "IMGP6822.jpg",
          "IMGP6823.jpg",
          "IMGP6824.jpg",
          "IMGP6825.jpg",
          "IMGP6826.jpg",
          "IMGP6827.jpg",
          "IMGP6828.jpg",
          "IMGP6829.jpg",
          "IMGP6830.jpg",
          "IMGP6831.jpg",
          "_IMGP6821.jpg"
        ]
      }
    },
    "Повар Людный Вова Кремл-23-5": {
      "Кухня модерн": {
        "titular": "_IMGP6239.jpg",
        "images": [
          "IMGP6234.jpg",
          "IMGP6235.jpg",
          "IMGP6236.jpg",
          "IMGP6237.jpg",
          "IMGP6238.jpg",
          "IMGP6240.jpg",
          "IMGP6241.jpg",
          "IMGP6242.jpg",
          "IMGP6244.jpg",
          "IMGP6245.jpg",
          "IMGP6246.jpg",
          "IMGP6247.jpg",
          "_IMGP6239.jpg"
        ]
      }
    },
    "Пушкина9": {
      "Кухня модерн": {
        "titular": "_IMGP27064.jpg",
        "images": [
          "IMGP27061.jpg",
          "IMGP27062.jpg",
          "IMGP27063.jpg",
          "_IMGP27064.jpg"
        ]
      }
    },
    "Саша София": {
      "Кухня модерн": {
        "titular": "_IMGP6890.jpg",
        "images": [
          "IMGP6886.jpg",
          "IMGP6887.jpg",
          "IMGP6888.jpg",
          "IMGP6889.jpg",
          "IMGP6891.jpg",
          "IMGP6892.jpg",
          "IMGP6893.jpg",
          "IMGP6895.jpg",
          "IMGP6896.jpg",
          "IMGP6897.jpg",
          "IMGP6898.jpg",
          "IMGP6899.jpg",
          "IMGP6900.jpg",
          "IMGP6901.jpg",
          "IMGP6902.jpg",
          "IMGP6903.jpg",
          "IMGP6904.jpg",
          "IMGP6905.jpg",
          "IMGP6906.jpg",
          "IMGP6907.jpg",
          "IMGP6908.jpg",
          "_IMGP6890.jpg"
        ]
      }
    },
    "Сергей Жукова-13-100": {
      "Кухня модерн": {
        "titular": "_IMGP6977.jpg",
        "images": [
          "IMGP6971.jpg",
          "IMGP6972.jpg",
          "IMGP6974.jpg",
          "IMGP6975.jpg",
          "IMGP6978.jpg",
          "IMGP6979.jpg",
          "IMGP6980.jpg",
          "IMGP6981.jpg",
          "IMGP6982.jpg",
          "IMGP6983.jpg",
          "IMGP6984.jpg",
          "IMGP6985.jpg",
          "IMGP6986.jpg",
          "IMGP6987.jpg",
          "IMGP6988.jpg",
          "IMGP6989.jpg",
          "IMGP6990.jpg",
          "IMGP6991.jpg",
          "IMGP6992.jpg",
          "IMGP6993.jpg",
          "IMGP7019.jpg",
          "IMGP7020.jpg",
          "IMGP7021.jpg",
          "_IMGP6977.jpg"
        ]
      }
    },
    "Татьяна Хорошово": {
      "Кухня модерн": {
        "titular": "_IMGP6381.jpg",
        "images": [
          "IMGP6335.jpg",
          "IMGP6336.jpg",
          "IMGP6337.jpg",
          "IMGP6339.jpg",
          "IMGP6340.jpg",
          "IMGP6341.jpg",
          "IMGP6342.jpg",
          "IMGP6343.jpg",
          "IMGP6344.jpg",
          "IMGP6346.jpg",
          "IMGP6347.jpg",
          "IMGP6348.jpg",
          "IMGP6349.jpg",
          "IMGP6350.jpg",
          "IMGP6351.jpg",
          "IMGP6352.jpg",
          "IMGP6353.jpg",
          "IMGP6354.jpg",
          "IMGP6355.jpg",
          "IMGP6356.jpg",
          "IMGP6357.jpg",
          "IMGP6358.jpg",
          "IMGP6359.jpg",
          "IMGP6360.jpg",
          "IMGP6361.jpg",
          "IMGP6362.jpg",
          "IMGP6363.jpg",
          "IMGP6364.jpg",
          "IMGP6365.jpg",
          "IMGP6366.jpg",
          "IMGP6367.jpg",
          "IMGP6368.jpg",
          "IMGP6369.jpg",
          "IMGP6370.jpg",
          "IMGP6371.jpg",
          "IMGP6372.jpg",
          "IMGP6373.jpg",
          "IMGP6374.jpg",
          "IMGP6375.jpg",
          "IMGP6376.jpg",
          "IMGP6377.jpg",
          "IMGP6378.jpg",
          "IMGP6379.jpg",
          "IMGP6380.jpg",
          "_IMGP6381.jpg"
        ]
      }
    },
    "Татьяна Шахтерская": {
      "Кухня модерн": {
        "titular": "_IMGP4883.jpg",
        "images": [
          "IMGP4884.jpg",
          "IMGP4885.jpg",
          "IMGP4886.jpg",
          "IMGP4887.jpg",
          "IMGP4888.jpg",
          "IMGP4889.jpg",
          "IMGP4890.jpg",
          "IMGP4891.jpg",
          "_IMGP4883.jpg"
        ]
      }
    },
    "Чижик": {
      "Кухня модерн": {
        "titular": "_IMGP6654.jpg",
        "images": [
          "IMGP6604.jpg",
          "IMGP6605.jpg",
          "IMGP6606.jpg",
          "IMGP6607.jpg",
          "IMGP6608.jpg",
          "IMGP6609.jpg",
          "IMGP6610.jpg",
          "IMGP6611.jpg",
          "IMGP6612.jpg",
          "IMGP6613.jpg",
          "IMGP6615.jpg",
          "IMGP6617.jpg",
          "IMGP6618.jpg",
          "IMGP6619.jpg",
          "IMGP6620.jpg",
          "IMGP6621.jpg",
          "IMGP6622.jpg",
          "IMGP6623.jpg",
          "IMGP6624.jpg",
          "IMGP6625.jpg",
          "IMGP6651.jpg",
          "IMGP6652.jpg",
          "IMGP6653.jpg",
          "IMGP6656.jpg",
          "IMGP6657.jpg",
          "IMGP6659.jpg",
          "_IMGP6654.jpg"
        ]
      },
      "Кухня модерн мама": {
        "titular": "_IMGP7189.jpg",
        "images": [
          "IMGP7184.jpg",
          "IMGP7185.jpg",
          "IMGP7186.jpg",
          "IMGP7187.jpg",
          "IMGP7188.jpg",
          "IMGP7190.jpg",
          "IMGP7191.jpg",
          "_IMGP7189.jpg"
        ]
      }
    },
    "Этюдная 18": {
      "Кухня модерн": {
        "titular": "_IMGP5773.jpg",
        "images": [
          "IMGP5772.jpg",
          "IMGP5774.jpg",
          "IMGP5775.jpg",
          "IMGP5776.jpg",
          "IMGP5777.jpg",
          "IMGP5778.jpg",
          "IMGP5779.jpg",
          "IMGP5780.jpg",
          "IMGP5781.jpg",
          "IMGP5783.jpg",
          "IMGP5784.jpg",
          "IMGP5785.jpg",
          "IMGP5786.jpg",
          "IMGP5787.jpg",
          "IMGP5788.jpg",
          "_IMGP5773.jpg"
        ]
      }
    },
    "Юля Бакины 12-53": {
      "Кухня модерн": {
        "titular": "_IMGP6682.jpg",
        "images": [
          "IMGP6643.jpg",
          "IMGP6645.jpg",
          "IMGP6647.jpg",
          "IMGP6648.jpg",
          "IMGP6649.jpg",
          "IMGP6650.jpg",
          "IMGP6679.jpg",
          "IMGP6680.jpg",
          "IMGP6681.jpg",
          "IMGP6683.jpg",
          "IMGP6684.jpg",
          "IMGP6686.jpg",
          "IMGP6687.jpg",
          "IMGP6688.jpg",
          "IMGP6689.jpg",
          "IMGP6690.jpg",
          "IMGP6691.jpg",
          "_IMGP6682.jpg"
        ]
      }
    },
    "Яна Кутузова 9-34 Гладковка": {
      "Кухня модерн": {
        "titular": "_IMGP5204.jpg",
        "images": [
          "IMGP5189.jpg",
          "IMGP5190.jpg",
          "IMGP5191.jpg",
          "IMGP5193.jpg",
          "IMGP5194.jpg",
          "IMGP5195.jpg",
          "IMGP5196.jpg",
          "IMGP5197.jpg",
          "IMGP5198.jpg",
          "IMGP5199.jpg",
          "IMGP5200.jpg",
          "IMGP5201.jpg",
          "IMGP5202.jpg",
          "IMGP5203.jpg",
          "IMGP5205.jpg",
          "_IMGP5204.jpg"
        ]
      }
    }
  },
  "Шкаф-купе": {
    "Алексей Текстильщик": {
      "Шкаф-купе": {
        "titular": "_IMGP6192.jpg",
        "images": [
          "IMGP6193.jpg",
          "_IMGP6192.jpg"
        ]
      }
    },
    "Алик": {
      "Шкаф-купе": {
        "titular": "_IMGP6154.jpg",
        "images": [
          "IMGP6138.jpg",
          "IMGP6139.jpg",
          "IMGP6140.jpg",
          "IMGP6142.jpg",
          "IMGP6143.jpg",
          "IMGP6144.jpg",
          "IMGP6145.jpg",
          "IMGP6147.jpg",
          "IMGP6148.jpg",
          "IMGP6149.jpg",
          "IMGP6150.jpg",
          "IMGP6151.jpg",
          "IMGP6152.jpg",
          "IMGP6153.jpg",
          "IMGP6155.jpg",
          "IMGP6156.jpg",
          "IMGP6157.jpg",
          "IMGP6158.jpg",
          "_IMGP6154.jpg"
        ]
      }
    },
    "Анатолий Заперевальный": {
      "Шкаф-купе": {
        "titular": "_IMGP5210.jpg",
        "images": [
          "IMGP5211.jpg",
          "IMGP5212.jpg",
          "IMGP5214.jpg",
          "IMGP5215.jpg",
          "IMGP5216.jpg",
          "_IMGP5210.jpg"
        ]
      }
    },
    "Анатолий Тимура 66": {
      "Шкаф-купе": {
        "titular": "_IMGP5988.jpg",
        "images": [
          "IMGP5986.jpg",
          "IMGP5987.jpg",
          "IMGP5989.jpg",
          "IMGP5990.jpg",
          "_IMGP5988.jpg"
        ]
      }
    },
    "Анна Шахтостроителей": {
      "Шкаф-купе": {
        "titular": "IMGP7144.jpg",
        "images": [
          "IMGP7144.jpg",
          "IMGP7145.jpg",
          "IMGP7146.jpg",
          "IMGP7147.jpg",
          "IMGP7148.jpg",
          "IMGP7149.jpg",
          "IMGP7150.jpg",
          "IMGP7151.jpg",
          "IMGP7152.jpg",
          "IMGP7153.jpg",
          "IMGP7154.jpg",
          "IMGP7155.jpg"
        ]
      }
    },
    "Аня кума": {
      "Шкаф-купе 1": {
        "titular": "_DSC_0265.jpg",
        "images": [
          "DSC_0267.jpg",
          "_DSC_0265.jpg"
        ]
      }
    },
    "Борис Зоологическая 89": {
      "Шкаф-купе": {
        "titular": "_IMGP6160.jpg",
        "images": [
          "IMGP6159.jpg",
          "IMGP6161.jpg",
          "IMGP6162.jpg",
          "IMGP6163.jpg",
          "IMGP6164.jpg",
          "_IMGP6160.jpg"
        ]
      }
    },
    "ВАЗ Андрей": {
      "Шкаф-купе": {
        "titular": "_IMGP5609.jpg",
        "images": [
          "IMGP5576.jpg",
          "IMGP5577.jpg",
          "IMGP5578.jpg",
          "IMGP5580.jpg",
          "IMGP5581.jpg",
          "IMGP5582.jpg",
          "IMGP5583.jpg",
          "IMGP5584.jpg",
          "IMGP5607.jpg",
          "IMGP5608.jpg",
          "IMGP5610.jpg",
          "IMGP5611.jpg",
          "IMGP5612.jpg",
          "IMGP5613.jpg",
          "_IMGP5609.jpg"
        ]
      }
    },
    "Валентина Лузина 55": {
      "Шкаф-купе": {
        "titular": "_IMGP6135.jpg",
        "images": [
          "IMGP6109.jpg",
          "IMGP6110.jpg",
          "IMGP6111.jpg",
          "IMGP6112.jpg",
          "IMGP6113.jpg",
          "IMGP6114.jpg",
          "IMGP6115.jpg",
          "IMGP6116.jpg",
          "IMGP6117.jpg",
          "IMGP6118.jpg",
          "IMGP6119.jpg",
          "IMGP6120.jpg",
          "IMGP6121.jpg",
          "_IMGP6135.jpg"
        ]
      }
    },
    "Детсад Лариса Викторовна": {
      "Шкаф-купе": {
        "titular": "IMGP7056.jpg",
        "images": [
          "IMGP7056.jpg",
          "IMGP7057.jpg",
          "IMGP7058.jpg",
          "IMGP7059.jpg",
          "IMGP7060.jpg"
        ]
      }
    },
    "Женя косметолог": {
      "Шкаф-купе": {
        "titular": "_IMGP6397.jpg",
        "images": [
          "IMGP6394.jpg",
          "IMGP6395.jpg",
          "IMGP6396.jpg",
          "IMGP6398.jpg",
          "IMGP6399.jpg",
          "IMGP6400.jpg",
          "_IMGP6397.jpg"
        ]
      }
    },
    "Женя Лидиевка": {
      "Шкаф-купе": {
        "titular": "_IMGP6074.jpg",
        "images": [
          "IMGP6067.jpg",
          "IMGP6068.jpg",
          "IMGP6071.jpg",
          "IMGP6072.jpg",
          "IMGP6073.jpg",
          "IMGP6075.jpg",
          "IMGP6076.jpg",
          "IMGP6078.jpg",
          "IMGP6080.jpg",
          "IMGP6081.jpg",
          "IMGP6082.jpg",
          "IMGP6083.jpg",
          "IMGP6084.jpg",
          "IMGP6085.jpg",
          "_IMGP6074.jpg"
        ]
      }
    },
    "Зоя Яковлевна": {
      "Шкаф-купе 1": {
        "titular": "_IMGP5737.jpg",
        "images": [
          "IMGP5716.jpg",
          "IMGP5717.jpg",
          "IMGP5719.jpg",
          "IMGP5723.jpg",
          "IMGP5724.jpg",
          "IMGP5725.jpg",
          "IMGP5726.jpg",
          "IMGP5727.jpg",
          "IMGP5728.jpg",
          "IMGP5730.jpg",
          "IMGP5733.jpg",
          "IMGP5735.jpg",
          "_IMGP5737.jpg"
        ]
      },
      "Шкаф-купе 2": {
        "titular": "_IMGP5755.jpg",
        "images": [
          "IMGP5740.jpg",
          "IMGP5741.jpg",
          "IMGP5742.jpg",
          "IMGP5744.jpg",
          "IMGP5745.jpg",
          "IMGP5746.jpg",
          "IMGP5747.jpg",
          "IMGP5748.jpg",
          "IMGP5751.jpg",
          "IMGP5752.jpg",
          "IMGP5753.jpg",
          "IMGP5756.jpg",
          "IMGP5758.jpg",
          "_IMGP5755.jpg"
        ]
      }
    },
    "Инна Егоровна": {
      "Шкаф-купе": {
        "titular": "_IMGP6037.jpg",
        "images": [
          "IMGP6038.jpg",
          "IMGP6039.jpg",
          "IMGP6040.jpg",
          "IMGP6041.jpg",
          "IMGP6042.jpg",
          "IMGP6043.jpg",
          "IMGP6044.jpg",
          "_IMGP6037.jpg"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Шкаф-купе 1": {
        "titular": "_DSCN0026.jpg",
        "images": [
          "DSCN0025.jpg",
          "DSC_0275.jpg",
          "DSC_0277.jpg",
          "_DSCN0026.jpg"
        ]
      }
    },
    "Катя Топаз": {
      "Шкаф-купе": {
        "titular": "_IMGP5971.jpg",
        "images": [
          "IMGP5961.jpg",
          "IMGP5962.jpg",
          "IMGP5963.jpg",
          "IMGP5967.jpg",
          "IMGP5968.jpg",
          "IMGP5969.jpg",
          "IMGP5973.jpg",
          "IMGP5974.jpg",
          "IMGP5975.jpg",
          "_IMGP5971.jpg"
        ]
      }
    },
    "Кошелюк СА": {
      "Шкаф-купе 1": {
        "titular": "_IMGP5020.jpg",
        "images": [
          "IMGP5008.jpg",
          "IMGP5009.jpg",
          "IMGP5010.jpg",
          "IMGP5011.jpg",
          "IMGP5013.jpg",
          "IMGP5014.jpg",
          "IMGP5015.jpg",
          "IMGP5016.jpg",
          "IMGP5017.jpg",
          "IMGP5018.jpg",
          "IMGP5019.jpg",
          "_IMGP5020.jpg"
        ]
      },
      "Шкаф-купе 2": {
        "titular": "_IMGP5023.jpg",
        "images": [
          "IMGP5024.jpg",
          "IMGP5025.jpg",
          "_IMGP5023.jpg"
        ]
      },
      "Шкаф-купе 3": {
        "titular": "_IMGP5058.jpg",
        "images": [
          "IMGP5057.jpg",
          "IMGP5059.jpg",
          "IMGP5060.jpg",
          "IMGP5061.jpg",
          "IMGP5062.jpg",
          "_IMGP5058.jpg"
        ]
      },
      "Шкаф-купе 4": {
        "titular": "_IMGP5003.jpg",
        "images": [
          "IMGP4996.jpg",
          "IMGP4997.jpg",
          "IMGP4998.jpg",
          "IMGP4999.jpg",
          "IMGP5000.jpg",
          "IMGP5001.jpg",
          "IMGP5002.jpg",
          "IMGP5004.jpg",
          "IMGP5006.jpg",
          "IMGP5007.jpg",
          "_IMGP5003.jpg"
        ]
      },
      "Шкаф-купе 5": {
        "titular": "_IMGP5089.jpg",
        "images": [
          "IMGP5088.jpg",
          "IMGP5095.jpg",
          "_IMGP5089.jpg"
        ]
      }
    },
    "Лев Абрамович": {
      "Шкаф-купе": {
        "titular": "_IMGP5639.jpg",
        "images": [
          "IMGP5637.jpg",
          "_IMGP5639.jpg"
        ]
      },
      "Шкаф-купе книжный": {
        "titular": "_IMGP5126.jpg",
        "images": [
          "IMGP5124.jpg",
          "IMGP5125.jpg",
          "IMGP5127.jpg",
          "IMGP5128.jpg",
          "_IMGP5126.jpg"
        ]
      }
    },
    "Лидия Пархом Текстильщик": {
      "Шкаф-купе": {
        "titular": "DSCN0463.jpg",
        "images": [
          "DSCN0463.jpg",
          "DSCN0464.jpg",
          "DSCN0465.jpg",
          "DSCN0466.jpg",
          "DSCN0467.jpg",
          "DSCN0468.jpg",
          "DSCN0469.jpg",
          "DSCN0470.jpg"
        ]
      }
    },
    "Львов_Светлана_Григоровича_4": {
      "Шкаф-купе": {
        "titular": "_IMG_20190226_153347.jpg",
        "images": [
          "IMG_20181219_215225.jpg",
          "IMG_20181219_215240.jpg",
          "IMG_20181231_200034.jpg",
          "IMG_20181231_200044.jpg",
          "IMG_20181231_200107.jpg",
          "IMG_20181231_200115.jpg",
          "IMG_20181231_200229.jpg",
          "IMG_20181231_200244.jpg",
          "IMG_20181231_200248.jpg",
          "IMG_20181231_200308.jpg",
          "IMG_20181231_200314.jpg",
          "IMG_20181231_200320.jpg",
          "IMG_20181231_200326.jpg",
          "IMG_20181231_200342.jpg",
          "IMG_20190104_191209.jpg",
          "IMG_20190104_191234.jpg",
          "IMG_20190226_153305.jpg",
          "IMG_20190226_153312.jpg",
          "IMG_20190226_153332.jpg",
          "_IMG_20190226_153347.jpg"
        ]
      }
    },
    "Олег Телецентр": {
      "Шкаф-купе 1": {
        "titular": "_IMGP6057.jpg",
        "images": [
          "IMGP6050.jpg",
          "IMGP6051.jpg",
          "IMGP6052.jpg",
          "IMGP6054.jpg",
          "IMGP6055.jpg",
          "_IMGP6057.jpg"
        ]
      },
      "Шкаф-купе 2": {
        "titular": "_IMGP6058.jpg",
        "images": [
          "IMGP6060.jpg",
          "IMGP6061.jpg",
          "IMGP6062.jpg",
          "IMGP6063.jpg",
          "IMGP6065.jpg",
          "IMGP6066.jpg",
          "_IMGP6058.jpg"
        ]
      }
    },
    "Саша Вахрушева 74": {
      "Шкаф-купе": {
        "titular": "_IMGP5357.jpg",
        "images": [
          "IMGP5352.jpg",
          "IMGP5353.jpg",
          "IMGP5354.jpg",
          "IMGP5355.jpg",
          "_IMGP5357.jpg"
        ]
      }
    },
    "Танюк Ира Лузина 5": {
      "Шкаф-купе": {
        "titular": "_IMGP6279.jpg",
        "images": [
          "IMGP6278.jpg",
          "IMGP6280.jpg",
          "IMGP6281.jpg",
          "IMGP6282.jpg",
          "IMGP6283.jpg",
          "IMGP6284.jpg",
          "_IMGP6279.jpg"
        ]
      }
    },
    "Татьяна Хорошово": {
      "Шкаф-купе в детской": {
        "titular": "_IMGP6382.jpg",
        "images": [
          "IMGP6291.jpg",
          "IMGP6303.jpg",
          "IMGP6304.jpg",
          "IMGP6308.jpg",
          "IMGP6386.jpg",
          "IMGP6387.jpg",
          "_IMGP6382.jpg"
        ]
      },
      "Шкаф-купе вход": {
        "titular": "_IMGP6692.jpg",
        "images": [
          "IMGP6693.jpg",
          "IMGP6694.jpg",
          "IMGP6695.jpg",
          "IMGP6696.jpg",
          "IMGP6697.jpg",
          "IMGP6698.jpg",
          "IMGP6699.jpg",
          "IMGP6707.jpg",
          "IMGP6708.jpg",
          "IMGP6709.jpg",
          "IMGP6710.jpg",
          "IMGP6711.jpg",
          "IMGP6712.jpg",
          "IMGP6713.jpg",
          "IMGP6714.jpg",
          "IMGP6715.jpg",
          "IMGP6716.jpg",
          "IMGP6717.jpg",
          "_IMGP6692.jpg"
        ]
      },
      "Шкаф-купе спальня": {
        "titular": "_IMGP6313.jpg",
        "images": [
          "IMGP6314.jpg",
          "IMGP6315.jpg",
          "IMGP6316.jpg",
          "IMGP6318.jpg",
          "IMGP6319.jpg",
          "IMGP6320.jpg",
          "IMGP6321.jpg",
          "IMGP6322.jpg",
          "IMGP6323.jpg",
          "IMGP6324.jpg",
          "IMGP6325.jpg",
          "_IMGP6313.jpg"
        ]
      },
      "Шкаф-купе цветы": {
        "titular": "_IMGP6700.jpg",
        "images": [
          "IMGP6701.jpg",
          "IMGP6702.jpg",
          "IMGP6703.jpg",
          "IMGP6704.jpg",
          "IMGP6705.jpg",
          "IMGP6706.jpg",
          "_IMGP6700.jpg"
        ]
      },
      "Шкаф-купе цоколь": {
        "titular": "_IMGP6329.jpg",
        "images": [
          "IMGP6286.jpg",
          "IMGP6287.jpg",
          "IMGP6288.jpg",
          "IMGP6290.jpg",
          "IMGP6328.jpg",
          "IMGP6333.jpg",
          "IMGP6334.jpg",
          "_IMGP6329.jpg"
        ]
      }
    },
    "Татьяна Шахтерская": {
      "Шкаф-купе": {
        "titular": "_IMGP4892.jpg",
        "images": [
          "IMGP4893.jpg",
          "IMGP4894.jpg",
          "IMGP4895.jpg",
          "_IMGP4892.jpg"
        ]
      }
    },
    "Яна Кутузова 9-34 Гладковка": {
      "Шкаф-купе": {
        "titular": "_IMGP5165.jpg",
        "images": [
          "IMGP5166.jpg",
          "IMGP5167.jpg",
          "IMGP5168.jpg",
          "IMGP5169.jpg",
          "IMGP5170.jpg",
          "IMGP5171.jpg",
          "IMGP5172.jpg",
          "IMGP5173.jpg",
          "IMGP5174.jpg",
          "IMGP5175.jpg",
          "IMGP5176.jpg",
          "IMGP5177.jpg",
          "IMGP5178.jpg",
          "_IMGP5165.jpg"
        ]
      }
    },
    "Яна Ленинский 33": {
      "Шкаф-купе 2": {
        "titular": "_IMGP7134.jpg",
        "images": [
          "IMGP7132.jpg",
          "IMGP7133.jpg",
          "_IMGP7134.jpg"
        ]
      }
    }
  },
  "Прихожая": {
    "Алик": {
      "Прихожая": {
        "titular": "_IMGP6881.jpg",
        "images": [
          "IMGP6878.jpg",
          "IMGP6879.jpg",
          "IMGP6880.jpg",
          "IMGP6882.jpg",
          "IMGP6883.jpg",
          "IMGP6885.jpg",
          "_IMGP6881.jpg"
        ]
      }
    },
    "Аня кума": {
      "Прихожая": {
        "titular": "_DSC_0262.jpg",
        "images": [
          "DSC_0263.jpg",
          "DSC_0264.jpg",
          "_DSC_0262.jpg"
        ]
      }
    },
    "ВАЗ Андрей": {
      "Прихожая": {
        "titular": "_IMGP5591.jpg",
        "images": [
          "IMGP5585.jpg",
          "IMGP5586.jpg",
          "IMGP5587.jpg",
          "IMGP5588.jpg",
          "IMGP5589.jpg",
          "IMGP5590.jpg",
          "IMGP5592.jpg",
          "IMGP5593.jpg",
          "IMGP5594.jpg",
          "IMGP5595.jpg",
          "IMGP5596.jpg",
          "IMGP5597.jpg",
          "IMGP5598.jpg",
          "IMGP5599.jpg",
          "IMGP5600.jpg",
          "IMGP5601.jpg",
          "IMGP5602.jpg",
          "IMGP5603.jpg",
          "IMGP5604.jpg",
          "IMGP5605.jpg",
          "_IMGP5591.jpg"
        ]
      }
    },
    "Валентина Мотель": {
      "Прихожая": {
        "titular": "_IMGP5219.jpg",
        "images": [
          "IMGP5220.jpg",
          "IMGP5221.jpg",
          "IMGP5222.jpg",
          "_IMGP5219.jpg"
        ]
      }
    },
    "Игорь Челюскинцев 142": {
      "Прихожая": {
        "titular": "_IMGP6774.jpg",
        "images": [
          "IMGP6762.jpg",
          "IMGP6763.jpg",
          "IMGP6764.jpg",
          "IMGP6765.jpg",
          "IMGP6766.jpg",
          "IMGP6767.jpg",
          "IMGP6768.jpg",
          "IMGP6769.jpg",
          "IMGP6770.jpg",
          "IMGP6771.jpg",
          "IMGP6772.jpg",
          "IMGP6773.jpg",
          "_IMGP6774.jpg"
        ]
      }
    },
    "Лариса Владиславовна": {
      "Прихожая": {
        "titular": "_IMGP6257.jpg",
        "images": [
          "IMGP6251.jpg",
          "IMGP6252.jpg",
          "IMGP6253.jpg",
          "IMGP6254.jpg",
          "IMGP6256.jpg",
          "IMGP6258.jpg",
          "IMGP6259.jpg",
          "IMGP6260.jpg",
          "IMGP6261.jpg",
          "IMGP6262.jpg",
          "IMGP6263.jpg",
          "IMGP6264.jpg",
          "IMGP6265.jpg",
          "_IMGP6257.jpg"
        ]
      }
    },
    "Лузина 16-27": {
      "Прихожая": {
        "titular": "_IMGP5506.jpg",
        "images": [
          "IMGP5480.jpg",
          "IMGP5481.jpg",
          "IMGP5482.jpg",
          "IMGP5483.jpg",
          "IMGP5484.jpg",
          "IMGP5485.jpg",
          "IMGP5486.jpg",
          "IMGP5487.jpg",
          "IMGP5488.jpg",
          "IMGP5489.jpg",
          "IMGP5490.jpg",
          "IMGP5491.jpg",
          "IMGP5492.jpg",
          "IMGP5493.jpg",
          "IMGP5494.jpg",
          "IMGP5495.jpg",
          "IMGP5496.jpg",
          "IMGP5497.jpg",
          "IMGP5498.jpg",
          "IMGP5499.jpg",
          "IMGP5502.jpg",
          "IMGP5503.jpg",
          "IMGP5504.jpg",
          "IMGP5505.jpg",
          "IMGP5507.jpg",
          "IMGP5508.jpg",
          "IMGP5509.jpg",
          "IMGP5510.jpg",
          "IMGP5511.jpg",
          "IMGP5512.jpg",
          "IMGP5513.jpg",
          "IMGP5514.jpg",
          "IMGP5515.jpg",
          "IMGP5516.jpg",
          "IMGP5517.jpg",
          "IMGP5518.jpg",
          "IMGP5519.jpg",
          "IMGP5520.jpg",
          "IMGP5521.jpg",
          "IMGP5522.jpg",
          "IMGP5523.jpg",
          "IMGP5524.jpg",
          "IMGP5525.jpg",
          "IMGP5526.jpg",
          "IMGP5528.jpg",
          "IMGP5530.jpg",
          "IMGP5531.jpg",
          "IMGP5532.jpg",
          "_IMGP5506.jpg"
        ]
      }
    },
    "Людмила Кремл-29-44": {
      "Прихожая": {
        "titular": "_IMGP7006.jpg",
        "images": [
          "IMGP7005.jpg",
          "IMGP7007.jpg",
          "_IMGP7006.jpg"
        ]
      }
    },
    "Настя Патрикац": {
      "Прихожая": {
        "titular": "_IMGP4944.jpg",
        "images": [
          "IMGP4943.jpg",
          "IMGP4945.jpg",
          "IMGP4946.jpg",
          "IMGP4947.jpg",
          "IMGP4948.jpg",
          "_IMGP4944.jpg"
        ]
      }
    },
    "Наташа Магистральный": {
      "Прихожая": {
        "titular": "_IMGP5564.jpg",
        "images": [
          "IMGP5562.jpg",
          "_IMGP5564.jpg"
        ]
      }
    },
    "РККА-5-24": {
      "Прихожая": {
        "titular": "_IMGP4533.jpg",
        "images": [
          "IMGP4534.jpg",
          "IMGP4535.jpg",
          "IMGP4536.jpg",
          "_IMGP4533.jpg"
        ]
      }
    },
    "Саша София": {
      "Прихожая": {
        "titular": "DSCN0235.jpg",
        "images": [
          "DSCN0235.jpg",
          "DSCN0236.jpg",
          "DSCN0237.jpg",
          "DSCN0238.jpg",
          "DSCN0239.jpg",
          "DSCN0240.jpg",
          "DSCN0241.jpg"
        ]
      }
    },
    "Сергей Жукова-13-100": {
      "Прихожая": {
        "titular": "_IMGP7014.jpg",
        "images": [
          "IMGP7010.jpg",
          "IMGP7011.jpg",
          "IMGP7013.jpg",
          "IMGP7015.jpg",
          "IMGP7017.jpg",
          "IMGP7018.jpg",
          "_IMGP7014.jpg"
        ]
      }
    },
    "Фролова": {
      "Прихожая": {
        "titular": "_IMGP4961.jpg",
        "images": [
          "IMGP4962.jpg",
          "_IMGP4961.jpg"
        ]
      }
    },
    "Чижик": {
      "Прихожая": {
        "titular": "_IMGP6833.jpg",
        "images": [
          "IMGP6834.jpg",
          "IMGP6835.jpg",
          "IMGP6836.jpg",
          "IMGP6837.jpg",
          "IMGP6839.jpg",
          "IMGP6841.jpg",
          "_IMGP6833.jpg"
        ]
      }
    },
    "Шекспира 5": {
      "Прихожая": {
        "titular": "DSCN0224.jpg",
        "images": [
          "DSCN0224.jpg",
          "DSCN0225.jpg",
          "DSCN0226.jpg",
          "DSCN0228.jpg",
          "DSCN0232.jpg",
          "DSCN0233.jpg"
        ]
      }
    }
  },
  "Гостиная": {
    "Инна Антипова-1-18": {
      "Гостиная": {
        "titular": "_IMGP7157.jpg",
        "images": [
          "IMGP7156.jpg",
          "IMGP7158.jpg",
          "IMGP7159.jpg",
          "IMGP7160.jpg",
          "IMGP7161.jpg",
          "IMGP7162.jpg",
          "IMGP7163.jpg",
          "_IMGP7157.jpg"
        ]
      }
    },
    "Лузина 16-27": {
      "Гостиная 1": {
        "titular": "_IMGP5136.jpg",
        "images": [
          "IMGP5123.jpg",
          "IMGP5129.jpg",
          "IMGP5130.jpg",
          "IMGP5131.jpg",
          "IMGP5132.jpg",
          "IMGP5137.jpg",
          "IMGP5138.jpg",
          "IMGP5139.jpg",
          "IMGP5140.jpg",
          "IMGP5142.jpg",
          "IMGP5143.jpg",
          "IMGP5144.jpg",
          "IMGP5145.jpg",
          "IMGP5146.jpg",
          "IMGP5147.jpg",
          "IMGP5148.jpg",
          "IMGP5149.jpg",
          "IMGP5150.jpg",
          "IMGP5151.jpg",
          "IMGP5152.jpg",
          "IMGP5153.jpg",
          "IMGP5154.jpg",
          "IMGP5155.jpg",
          "IMGP5217.jpg",
          "IMGP5218.jpg",
          "_IMGP5136.jpg"
        ]
      },
      "Гостиная 2": {
        "titular": "_IMGP5098.jpg",
        "images": [
          "IMGP5104.jpg",
          "IMGP5106.jpg",
          "IMGP5111.jpg",
          "IMGP5115.jpg",
          "IMGP5116.jpg",
          "IMGP5118.jpg",
          "IMGP5120.jpg",
          "_IMGP5098.jpg"
        ]
      }
    }
  },
  "Офис": {
    "ГБ21": {
      "Офис": {
        "titular": "_IMGP6725.jpg",
        "images": [
          "IMGP6718.jpg",
          "IMGP6719.jpg",
          "IMGP6720.jpg",
          "IMGP6721.jpg",
          "IMGP6722.jpg",
          "IMGP6723.jpg",
          "IMGP6724.jpg",
          "IMGP6726.jpg",
          "IMGP6727.jpg",
          "_IMGP6725.jpg"
        ]
      }
    },
    "ДТЭК": {
      "Офис 306": {
        "titular": "_IMGP4458.jpg",
        "images": [
          "IMGP4457.jpg",
          "IMGP4459.jpg",
          "IMGP4460.jpg",
          "IMGP4461.jpg",
          "IMGP4462.jpg",
          "IMGP4463.jpg",
          "IMGP4464.jpg",
          "IMGP4465.jpg",
          "IMGP4473.jpg",
          "IMGP4474.jpg",
          "IMGP4475.jpg",
          "IMGP4476.jpg",
          "IMGP4477.jpg",
          "IMGP4478.jpg",
          "IMGP4479.jpg",
          "_IMGP4458.jpg"
        ]
      },
      "Офис 309": {
        "titular": "_IMGP4914.jpg",
        "images": [
          "IMGP4915.jpg",
          "IMGP4916.jpg",
          "IMGP4917.jpg",
          "IMGP4918.jpg",
          "IMGP4919.jpg",
          "IMGP4920.jpg",
          "IMGP4921.jpg",
          "IMGP4922.jpg",
          "IMGP4923.jpg",
          "IMGP4925.jpg",
          "IMGP4926.jpg",
          "IMGP4927.jpg",
          "IMGP4928.jpg",
          "IMGP4929.jpg",
          "IMGP4930.jpg",
          "IMGP4931.jpg",
          "IMGP4932.jpg",
          "IMGP4933.jpg",
          "IMGP4934.jpg",
          "IMGP4935.jpg",
          "IMGP4936.jpg",
          "_IMGP4914.jpg"
        ]
      },
      "Офис 317": {
        "titular": "IMGP4403.jpg",
        "images": [
          "IMGP4403.jpg",
          "IMGP4470.jpg",
          "IMGP4471.jpg",
          "IMGP4472.jpg"
        ]
      }
    },
    "Женя косметолог": {
      "Офис": {
        "titular": "_IMGP6666.jpg",
        "images": [
          "IMGP6660.jpg",
          "IMGP6661.jpg",
          "IMGP6662.jpg",
          "IMGP6663.jpg",
          "IMGP6664.jpg",
          "_IMGP6666.jpg"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Офис": {
        "titular": "_IMGP6873.jpg",
        "images": [
          "IMGP6842.jpg",
          "IMGP6844.jpg",
          "IMGP6845.jpg",
          "IMGP6846.jpg",
          "IMGP6847.jpg",
          "IMGP6872.jpg",
          "IMGP6874.jpg",
          "IMGP6875.jpg",
          "IMGP6876.jpg",
          "IMGP6877.jpg",
          "_IMGP6873.jpg"
        ]
      }
    },
    "Исполком Гвардейка": {
      "Офис приемная": {
        "titular": "_IMGP4901.jpg",
        "images": [
          "IMGP4896.jpg",
          "IMGP4897.jpg",
          "IMGP4898.jpg",
          "IMGP4899.jpg",
          "IMGP4900.jpg",
          "_IMGP4901.jpg"
        ]
      }
    },
    "Лев Абрамович": {
      "Офис": {
        "titular": "_IMGP5408.jpg",
        "images": [
          "IMGP5409.jpg",
          "IMGP5410.jpg",
          "IMGP5411.jpg",
          "IMGP5412.jpg",
          "IMGP5413.jpg",
          "IMGP5414.jpg",
          "IMGP5415.jpg",
          "IMGP5416.jpg",
          "IMGP5417.jpg",
          "IMGP5418.jpg",
          "IMGP5419.jpg",
          "IMGP5420.jpg",
          "IMGP5421.jpg",
          "IMGP5422.jpg",
          "IMGP5423.jpg",
          "_IMGP5408.jpg"
        ]
      }
    },
    "Лицей 5": {
      "Офис": {
        "titular": "_IMGP4501.jpg",
        "images": [
          "IMGP4500.jpg",
          "IMGP4502.jpg",
          "IMGP4503.jpg",
          "IMGP4504.jpg",
          "IMGP4505.jpg",
          "IMGP4506.jpg",
          "IMGP4507.jpg",
          "_IMGP4501.jpg"
        ]
      }
    },
    "РККА-5-24": {
      "Офис": {
        "titular": "_IMGP4542.jpg",
        "images": [
          "IMGP4543.jpg",
          "_IMGP4542.jpg"
        ]
      }
    },
    "ЦОФ Доброполье": {
      "Офис": {
        "titular": "_IMGP4905.jpg",
        "images": [
          "IMGP4902.jpg",
          "IMGP4903.jpg",
          "IMGP4904.jpg",
          "IMGP4906.jpg",
          "IMGP4907.jpg",
          "IMGP4908.jpg",
          "IMGP4909.jpg",
          "IMGP4910.jpg",
          "IMGP4911.jpg",
          "IMGP4912.jpg",
          "IMGP4913.jpg",
          "_IMGP4905.jpg"
        ]
      }
    }
  },
  "Детская": {
    "Аня кума": {
      "Детская": {
        "titular": "_IMGP6045.jpg",
        "images": [
          "IMGP6046.jpg",
          "IMGP6047.jpg",
          "IMGP6048.jpg",
          "IMGP6049.jpg",
          "_IMGP6045.jpg"
        ]
      }
    },
    "Кошелюк СА": {
      "Детская": {
        "titular": "_IMGP5094.jpg",
        "images": [
          "IMGP5088.jpg",
          "IMGP5089.jpg",
          "IMGP5090.jpg",
          "IMGP5091.jpg",
          "IMGP5092.jpg",
          "IMGP5095.jpg",
          "_IMGP5094.jpg"
        ]
      }
    },
    "Лузина 16-27": {
      "Детская": {
        "titular": "_IMGP4301.jpg",
        "images": [
          "IMGP4296.jpg",
          "IMGP4297.jpg",
          "IMGP4298.jpg",
          "IMGP4299.jpg",
          "IMGP4300.jpg",
          "IMGP4875.jpg",
          "IMGP4876.jpg",
          "IMGP4877.jpg",
          "IMGP6728.jpg",
          "IMGP6729.jpg",
          "_IMGP4301.jpg"
        ]
      }
    },
    "Сергей-Ильича-20-211": {
      "Детская": {
        "titular": "_IMGP6670.jpg",
        "images": [
          "IMGP6667.jpg",
          "IMGP6668.jpg",
          "IMGP6669.jpg",
          "IMGP6671.jpg",
          "IMGP6672.jpg",
          "IMGP6673.jpg",
          "IMGP6674.jpg",
          "IMGP6675.jpg",
          "IMGP6676.jpg",
          "IMGP6677.jpg",
          "IMGP6678.jpg",
          "_IMGP6670.jpg"
        ]
      }
    },
    "Татьяна Хорошово": {
      "Детская": {
        "titular": "_IMGP6385.jpg",
        "images": [
          "IMGP6291.jpg",
          "IMGP6292.jpg",
          "IMGP6295.jpg",
          "IMGP6296.jpg",
          "IMGP6297.jpg",
          "IMGP6299.jpg",
          "IMGP6300.jpg",
          "IMGP6301.jpg",
          "IMGP6302.jpg",
          "IMGP6303.jpg",
          "IMGP6304.jpg",
          "IMGP6307.jpg",
          "IMGP6308.jpg",
          "IMGP6309.jpg",
          "IMGP6310.jpg",
          "IMGP6311.jpg",
          "IMGP6382.jpg",
          "IMGP6386.jpg",
          "IMGP6387.jpg",
          "IMGP6388.jpg",
          "_IMGP6385.jpg"
        ]
      }
    },
    "Яна Ленинский 33": {
      "Детская": {
        "titular": "_IMGP7140.jpg",
        "images": [
          "IMGP7125.jpg",
          "IMGP7128.jpg",
          "IMGP7130.jpg",
          "IMGP7131.jpg",
          "IMGP7135.jpg",
          "IMGP7137.jpg",
          "IMGP7142.jpg",
          "_IMGP7140.jpg"
        ]
      }
    }
  },
  "Разное": {
    "Анатолий школа 21": {
      "Разное": {
        "titular": "_IMGP6878.jpg",
        "images": [
          "IMGP6879.jpg",
          "_IMGP6878.jpg"
        ]
      }
    },
    "Братуха": {
      "Разное 1": {
        "titular": "_DSC_0106.jpg",
        "images": [
          "DSC_0107.jpg",
          "_DSC_0106.jpg"
        ]
      }
    },
    "ВАЗ Андрей": {
      "Разное": {
        "titular": "_IMGP5567.jpg",
        "images": [
          "IMGP5565.jpg",
          "IMGP5566.jpg",
          "_IMGP5567.jpg"
        ]
      },
      "Разное 1": {
        "titular": "_IMGP5570.jpg",
        "images": [
          "IMGP5568.jpg",
          "IMGP5569.jpg",
          "IMGP5571.jpg",
          "IMGP5572.jpg",
          "IMGP5573.jpg",
          "IMGP5574.jpg",
          "IMGP5575.jpg",
          "_IMGP5570.jpg"
        ]
      },
      "Разное 2": {
        "titular": "_IMGP5614.jpg",
        "images": [
          "IMGP5615.jpg",
          "IMGP5616.jpg",
          "_IMGP5614.jpg"
        ]
      }
    },
    "Денис Ходаковского": {
      "Разное 1": {
        "titular": "IMGP6996.jpg",
        "images": [
          "IMGP6996.jpg",
          "IMGP6998.jpg",
          "IMGP6999.jpg",
          "IMGP7000.jpg"
        ]
      },
      "Разное 2": {
        "titular": "_IMGP7004.jpg",
        "images": [
          "IMGP7001.jpg",
          "IMGP7002.jpg",
          "IMGP7003.jpg",
          "_IMGP7004.jpg"
        ]
      }
    },
    "ДТЭК": {
      "Разное Курахово 1": {
        "titular": "_IMGP4484.jpg",
        "images": [
          "IMGP4483.jpg",
          "IMGP4485.jpg",
          "IMGP4486.jpg",
          "IMGP4487.jpg",
          "IMGP4488.jpg",
          "_IMGP4484.jpg"
        ]
      },
      "Разное Курахово 2": {
        "titular": "_IMGP4489.jpg",
        "images": [
          "IMGP4490.jpg",
          "IMGP4491.jpg",
          "IMGP4492.jpg",
          "IMGP4493.jpg",
          "_IMGP4489.jpg"
        ]
      }
    },
    "Ирина Университетская 134-38": {
      "Разное": {
        "titular": "_DSCN0021.jpg",
        "images": [
          "DSCN0022.jpg",
          "_DSCN0021.jpg"
        ]
      }
    },
    "Шекспира 5": {
      "Разное": {
        "titular": "_IMGP5473.jpg",
        "images": [
          "IMGP5474.jpg",
          "IMGP5476.jpg",
          "IMGP5477.jpg",
          "_IMGP5473.jpg"
        ]
      }
    }
  }
}

$(function () {

    var app = {

      root: "furniture-catalog",
      name: "Каталог мебели",
      search_mode: false,
      template: _.template($('#thumbTmpl').html()),
      titles: ['Кухни "Классика"', 'Кухни "Модерн"', 'Шкафы-купе', 'Прихожие', 'Гостиные', 'Офисная', 'Детские', 'Разное'],
      itemtitle: ['Кухня классика', 'Кухня модерн', 'Шкаф-купе', 'Прихожая', 'Гостиная', 'Офис', 'Детская', 'Разное'],

      initialize: function() {
        var root = this.root;
        this.prj_path = `/${root}/static/img/projects/`;
        this.cats = this.titles.map(function(cat, i) { return [`/${root}/category/${i}`, cat]; });
        // create categorie's menu
        var el = $("#catmenu");
        this.cats.forEach(function(cat, i) { el.append(`<li><a href="${cat[0]}">${cat[1]}</a></li>`); });
        // prepare routes hash
        var routes = {};
        [ ['(/)', 'main'],
          ['/index(/)', 'main'],
          ['/index.html(/)', 'main'],
          ['/category/:cat(/)', 'showCategory'],
          ['/category/:cat/:client/:project(/)', 'showProject']
        ].forEach(function(i) { 
          routes[root + i[0]] = i[1]; 
        });
        // console.log('routes', routes);
        this.router = new Router({ routes: routes });
        window.Router = this.router;

        this.views = {
          search: new SearchView(),
          main: new MainView(),
          cat:  new CategoryView(),
          prj:  new ProjectView()
        }

        // enable history.back() when 'ESC' key pressed
        document.onkeydown = function(e) {
          if (e.keyCode == 27) {  // escape key code check
            history.back();
            return false;
          }
	      }

        $("body").on("click","a:not(a[data-bypass])",function(e){
          e.preventDefault();
          var href = $(this).attr("href");
          Backbone.history.navigate(href, {trigger: true});
        });

        $("#inputSearch").on('input', function() {
          var q = $(this).val();
          var items = [];
          if (q.length >= 2) {
            q = q.toLowerCase();
            app.itemtitle.forEach((ck, i) => {
              var cv = file_list[ck];
              Object.entries(cv).forEach(([pk, pv]) => {
                var pkl = pk.toLowerCase();
                if (pkl.includes(q)) {
                  Object.entries(pv).forEach(([tk, tv]) => {
                    items.push({
                      client: pk,
                      cat: i,
                      name: tk,
                      // images: tv.images,
                      titular: tv.titular
                    });
                  });
                }
              });
            });
            // console.log('q=', q, 'items=', items);
            if (items.length) {
              app.search_mode = true;
              app.views['search'].render(items);
            }
          } else if (app.search_mode) {
            app.search_mode = false;
            var l = Backbone.history.fragment;
            // console.log('Restore route', l);
            var ret = Backbone.history.navigate(l, {trigger: true});
            if (ret === undefined) {
              Backbone.history.loadUrl(l);
            }
          }
        });

      },

      getCategory: function(_cat, _client, _prj) {
      
        // console.log('getCategory',_cat, _client, _prj);

        var title = this.itemtitle[_cat];       
        var data = []
        var cat = file_list[title]

        if (cat) {
          if (_client && _prj) {
            var client = cat[_client]
            if (client) {
              var prj = client[_prj]
              if (prj) {
                data = prj.images
              }
            }

          } else {
            Object.entries(cat)
              .forEach(([client, projects]) => {
                Object.entries(projects)
                  .forEach(([project, value]) => {
                    data.push({
                      client,
                      project,
                      thumb: value.titular                   
                    })
                  })
              })          
          }
        }

        // console.log('out', data);
        return data;
      }

    };

    //=================================================
    var Router = Backbone.Router.extend({

      main: function(search) {
        // Single Page Apps for GitHub Pages
        // https://github.com/rafrex/spa-github-pages
        // console.log('main', search);
        if (search) {
          // "p=/category/0"
          var q = {};
          search.split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          // console.log('q', q);
          if (q.p !== undefined) {
            var l = window.location;
            var href = l.pathname.slice(0, -1) + (q.p || '')
              + (q.q ? ('?' + q.q) : '') + l.hash;
            // console.log('Navigate to', href);
            Backbone.history.navigate(href, {trigger: true});
            return;
          }
        }
        document.title = app.name;
        app.views.main.render();
      },

      showCategory: function(cat) {
        document.title = app.titles[cat];
        var items = app.getCategory(cat);
        app.views['cat'].render(items, cat);
      },

      showProject: function(cat, client, prj) {
        document.title = `${client} ${prj}`;
        var items = app.getCategory(cat, client, prj);
        app.views['prj'].render(items, client, prj);
      }

    });

    
    //=================================================
    var SearchView = Backbone.View.extend({
      el: $("#content"),

      render: function (items) {
        var html = '';
        items.forEach(function(item, i) {
          var prj_path = `${item.client}/${item.name}/`;
          // console.log(this);
          // var hint = `${title} ${i+1}`;
          html += app.template({
            atype: '',
            ahref: `${app.cats[item.cat][0]}/${prj_path}`,
            ihref: `${app.prj_path}${prj_path}/thumbnails/${item.titular}`,
            hint: '',
            title: item.client + '\n' + item.name
          });
        });

        this.$el.html(html);
        return this;
      },

    });
    
    //=================================================
    var MainView = Backbone.View.extend({
      el: $("#content"),
      html: '',
      initialize: function () {
        var self = this;
        app.cats.forEach(function(cat, i) {
          self.html += app.template({
            atype: '',
            ahref: cat[0],
            ihref: `${app.prj_path}_homeimages/${i+1}.jpg`,
            hint: cat[1],
            title: cat[1]
          });
        });
      },
      render: function () {
        this.$el.html(this.html);
        return this;
      },
    });

    //=================================================
    var CategoryView = Backbone.View.extend({
      el: $("#content"),

      render: function (items, cat) {
        var html = '',
            title = app.itemtitle[cat];
        items.forEach(function(item, i) {
          // console.log(this);
          html += app.template({
            atype: '',
            ahref: `${app.cats[cat][0]}/${item.client}/${item.project}`,
            ihref: `${app.prj_path}${item.client}/${item.project}/thumbnails/${item.thumb}`,
            hint: item.client,
            title: `${title} ${i+1}`
          });
        });

        this.$el.html(html);
        return this;
      },

    });

    //=================================================
    var ProjectView = Backbone.View.extend({
      el: $("#content"),

      render: function (items, client, prj) {
        var html = '',
            title = 'Фото',
            prj_path = `${app.prj_path}${client}/${prj}/`;
        items.forEach(function(item, i) {
          // console.log(this);
          var hint = `${title} ${i+1}`;
          html += app.template({
            atype: 'data-bypass data-gallery',
            ahref: `${prj_path}/images/${item}`,
            ihref: `${prj_path}/thumbnails/${item}`,
            hint: hint,
            title: hint
          });
        });

        this.$el.html(html);
        return this;
      },

    });

    //=================================================

    app.initialize();

    Backbone.history.start({
        root: '/',
        pushState: true
    });

});
