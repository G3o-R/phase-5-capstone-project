class RenameCommentToReplyOnCommentReplies < ActiveRecord::Migration[7.0]
  def change
    rename_column :comment_replies, :comment, :reply
  end
end
