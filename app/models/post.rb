class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, as: :likable, dependent: :destroy

  validates :user_id, presence: true
  validates :description, presence: true
  validates :image, presence: true
  validate :valid_image_url

  private

  def valid_image_url
    return if image.blank?

    unless image.match(/\Ahttps?:\/\/\S+\.(png|jpe?g|gif)\z/i)
      errors.add(:image, 'is not a valid image URL')
    end
  end
end
