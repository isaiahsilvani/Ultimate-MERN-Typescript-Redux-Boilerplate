import mongoose, { Schema } from 'mongoose'
import IBlank from '../interfaces/blank'


const BlankSchema: Schema = new Schema(
  {

  },
  {
      timestamps: true
  }
);

// EXTRA FUNCTIONALITY OF TYPESCRIPT ALERT - post/pre function
// Choose one of the actions you want to bind the post operation to


export default mongoose.model<IBlank>('Blank', BlankSchema);