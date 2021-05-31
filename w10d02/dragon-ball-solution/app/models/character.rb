class Character < ApplicationRecord
  belongs_to :planet

  validates :name, presence: true
  validates :planet, presence: true
end
