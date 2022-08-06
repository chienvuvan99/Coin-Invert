import {createModel} from '@rematch/core';
import type {RootModel} from '.';
import data from '~/api/data.json';
type QuestionType = 'boolean' | 'multiple' | 'mixed';
type QuestionsState = {
  data: data | string[];
};

const assessment = createModel<RootModel>()({
  state: {
    data: data,
  } as QuestionsState,
  reducers: {
    setData(state, payload: any) {
      return {...state, data: payload};
    },
  },
  effects: dispatch => ({
    async filterToMonth(month: number) {
      const newData = data.posts.filter((items, index) => {
        const monthItems = new Date(items.publishDate).getMonth() + 1;

        if (monthItems === month) {
          return items;
        }
      });
      dispatch.assessment.setData(newData);
    },
  }),
});

export default assessment;
