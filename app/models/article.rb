class Article < ApplicationRecord

	has_many :reviews, dependent: :destroy

	validates :visibility, inclusion: [true, false]
	validates :title, presence: true, length: { minimum: 5, maximum: 20}
	validates :text, presence: true, length: {minimum: 20}

	belongs_to :user
	has_many :reviewrequests, dependent: :destroy

end
