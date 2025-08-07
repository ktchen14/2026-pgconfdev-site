import moment from 'moment';

const data = import.meta.glob('./*.item.svelte', { eager: true });

// Map of id to an object with properties { Component, title, description, and
// date }. The id of a news item is its base name with the '.item.svelte'
// extension removed, e.g. 'some-news' is the id of '../some-news.item.svelte'.
// The date is a MomentJS object.
//
// The entire map is sorted in reverse chronological order by date.
export default new Map(
  Object.entries(data)
    .map(([name, item]) => {
      const id = name.replace(/^.*\/(.*).item.svelte$/, '$1');
      let { default: Component, title, description, date } = item;
      date = moment(date);
      return [id, { Component, title, description, date }];
    })
    .sort(([, a], [, b]) => b.date.diff(a.date)),
);
