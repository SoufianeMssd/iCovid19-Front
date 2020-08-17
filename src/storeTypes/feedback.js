// @flow

import type {RecordFactory, RecordOf} from 'immutable';
import {List, Record} from 'immutable';

export type FeedbackProps = {
  _id: String,
  message: String,
  likes: List<String>,
  createdAt: String,
};

export type FeedbackType = RecordOf<FeedbackProps>;
export type FeedbackFactoryType = RecordFactory<FeedbackProps>;

export const FeedbackFactory: FeedbackFactoryType = Record({
  '_id': '',
  'message': '',
  'likes': List(),
  'createdAt': '',
});

// Feedback List

type FeedbackListStoreProps = {
  status: 'loading' | 'error' | 'success' | 'idle',
  error: String,
  feedbackList: List<FeedbackType>,
};
  
export type FeedbackListStoreType = RecordOf<FeedbackListStoreProps>;
export type FeedbackListStoreFactoryType = RecordFactory<FeedbackListStoreProps>;

export const FeedbackListStoreFactory: FeedbackListStoreFactoryType = Record({
  'status': 'idle',
  'error': '',
  'feedbackList': List()
});

// add Feedback

type AddFeedbackStoreProps = {
  status: 'loading' | 'error' | 'success' | 'idle',
  error: String,
};
    
export type AddFeedbackStoreType = RecordOf<AddFeedbackStoreProps>;
export type AddFeedbackStoreFactoryType = RecordFactory<AddFeedbackStoreProps>;

export const AddFeedbackStoreFactory: AddFeedbackStoreFactoryType = Record({
  'status': 'idle',
  'error': '',
});

// delete Feedback

type DeleteFeedbackStoreProps = {
  status: 'loading' | 'error' | 'success' | 'idle',
  error: String,
};
    
export type DeleteFeedbackStoreType = RecordOf<DeleteFeedbackStoreProps>;
export type DeleteFeedbackStoreFactoryType = RecordFactory<DeleteFeedbackStoreProps>;

export const DeleteFeedbackStoreFactory: DeleteFeedbackStoreFactoryType = Record({
  'status': 'idle',
  'error': '',
});
