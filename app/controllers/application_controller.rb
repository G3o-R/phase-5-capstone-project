class ApplicationController < ActionController::API
    before_action :authorize
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    private
    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def record_not_found_response
        render json: {errors: "model not found"}, status: :not_found
    end
end
