class Entry < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_rich_text :content
end
