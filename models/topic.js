import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
