import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  reference: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  });

const Message = mongoose.model('Message', messageSchema);

export default Message;

