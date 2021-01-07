json.extract! admin_entry, :id, :title, :body, :category_id, :user_id, :created_at, :updated_at
json.url admin_entry_url(admin_entry, format: :json)
