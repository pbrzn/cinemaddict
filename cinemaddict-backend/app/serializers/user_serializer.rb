class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :username, :password, :bio, :avatar, :reviews, :movies
end
