import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    requried: [true, '缺少商品名稱']
  },
  price: {
    type: Number,
    min: 0,
    requried: [true, '缺少商品價格']
  },
  image: {
    type: String,
    requried: [true, '缺少商品圖片']
  },
  description: {
    type: String,
    requried: [true, '缺少商品說明']
  },
  category: {
    type: String,
    requried: [true, '缺少商品分類'],
    enum: {
      values: ['衣服', '食品', '3C', '遊戲'],
      message: '商品分類錯誤'
    }
  },
  sell: {
    type: Boolean,
    requried: [true, '缺少商品上架狀態']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
