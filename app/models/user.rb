class User < ActiveRecord::Base
  has_secure_password
  validates :username, length: { minimum: 5 }, presence: true
  has_many :scores
end
