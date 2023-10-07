class RemoveCommentReplies < ActiveRecord::Migration[7.0]
  def change
    drop_table :comment_replies
  end
end
