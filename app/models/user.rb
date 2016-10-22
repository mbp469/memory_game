class User < ActiveRecord::Base
  has_secure_password
  validates :username, presence: true
  has_many :scores
end

#Do we need to validate anything other then username? maybe email?
