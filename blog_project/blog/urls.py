from django.urls import path
from blog import views

urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name="register"),
    path('profile/', views.getUserProfile, name="user-profile"),
    path('', views.getUsers, name="user"),
    path('posts/', views.post_list_create, name='post-list-create'),
    path('posts/<int:pk>/', views.post_detail, name='post-detail'),
    path('posts/<int:post_pk>/comments/', views.comment_list_create, name='comment-list-create'),

]
