class Reviewrequest < ApplicationRecord

	validates :reviewer_id, presence: true

	belongs_to :article
	belongs_to :user

end
