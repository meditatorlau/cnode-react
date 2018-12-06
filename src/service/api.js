import request from '@/utils/request';

// topics
/**
 *
 * @param {object} page 页数
 * @param {object} tab 主题分类
 * @param {object} limit 每一页数量
 * @param {object} mdrender 是否渲染出所欲都markdown格式
 */
export async function getTopics({
  page = 1, tab = '', limit = 20
} = {}) {
  return request('/topics', {
    method: 'GET',
    params: {
      page,
      tab,
      limit
    }
  });
}

// 主题详情
export async function getTopic(id) {
  return request(`/api/v1/topic/${id}`, {
    method: 'GET'
  });
}


// collect

// comment

// user

// message
