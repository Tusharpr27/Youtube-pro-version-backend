import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: true,
        },
        thumbnail: {
            type: String, // clodianary url
            required: true,
        },
        title: {
            type: String, // clodinary url
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number, // cloudinary url
            required: true
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

    },
    {
        timestamps: true
    }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);