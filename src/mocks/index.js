import Translate from '../translate/Translate'

export const mockReviewChannels = [
  {
    channel: <Translate stringKey="ALL_REVIEWS" />,
    id: 0,
    source: '',
    status: true,
    overallRating: 4.6,
    totalReviews: 160,
    slug: 'all-reviews',
  },
  {
    channel: 'Dugun',
    id: 1,
    source: 'www.dugun.com',
    status: true,
    overallRating: 5,
    totalReviews: 28,
    slug: 'dugun',
  },
  {
    channel: 'Google',
    id: 2,
    source: 'www.google.com',
    status: true,
    overallRating: 3.6,
    totalReviews: 108,
    slug: 'google',
  },
  {
    channel: 'Facebook',
    id: 3,
    source: 'www.facebook.com',
    status: true,
    overallRating: 4,
    totalReviews: 18,
    slug: 'facebook',
  },
]

export const mockReviewsDugun = {
  overallRating: 4.6,
  totalReviews: 198,
  reviews: [
    {
      comment: 'Güzel bir mekan',
      commentDate: '2021-04-20T00:00:00+0300',
      id: 1,
      name: 'Emrah Yılmaz',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/70.jpg',
      providerReviewChannel: {
        channel: 'Dugun',
        id: 1,
        source: 'www.dugun.com',
        status: true,
        slug: 'dugun',
      },
      star: 4,
      status: true,
    },
  ],
}

export const mockReviewsGoogle = {
  overallRating: 5,
  totalReviews: 18,
  reviews: [
    {
      comment: 'Döneri çok lezzetli',
      commentDate: '2021-04-20T00:00:00+0300',
      id: 2,
      name: 'Emrah Yılmaz',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
      providerReviewChannel: {
        channel: 'Google',
        id: 2,
        source: 'www.google.com',
        status: true,
        slug: 'google',
      },
      star: 5,
      status: true,
    },
  ],
}

export const mockReviewsFacebook = {
  overallRating: 3.8,
  totalReviews: 85,
  reviews: [
    {
      comment: 'Servis kötüydü',
      commentDate: '2021-04-20T00:00:00+0300',
      id: 3,
      name: 'Emrah Yılmaz',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/77.jpg',
      providerReviewChannel: {
        channel: 'Facebook',
        id: 3,
        source: 'www.facebook.com',
        status: true,
        slug: 'facebook',
      },
      star: 3,
      status: true,
    },
  ],
}

export const mockReviewsAll = {
  overallRating:
    (mockReviewsFacebook.overallRating +
      mockReviewsDugun.overallRating +
      mockReviewsGoogle.overallRating) /
    3,
  totalReviews:
    mockReviewsDugun.totalReviews +
    mockReviewsFacebook.totalReviews +
    mockReviewsGoogle.totalReviews,
  reviews: [
    ...mockReviewsDugun.reviews,
    ...mockReviewsGoogle.reviews,
    ...mockReviewsFacebook.reviews,
  ],
}
