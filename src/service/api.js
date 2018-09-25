import request from '@/utils/request';

// topics
export async function getTopics() {
  return request('/api/v1/topics', {
    method: 'GET'
  })
}

export async function getTopic(id) {
  return request(`/api/v1/topic/${id}`, {
    method: 'GET'
  })
}


// collect

// comment

// user

// message
