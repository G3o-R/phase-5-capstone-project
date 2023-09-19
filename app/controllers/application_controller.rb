class ApplicationController < ActionController::API
    before_action :authorize
    include ActionController::Cookies

    private
    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { ["Not authorized"] }, status: :unauthorized unless @current_user
    end
end
