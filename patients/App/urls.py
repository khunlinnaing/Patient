from django.urls import path, include
from . import views
urlpatterns = [
    # render the Homepage
    path('', views.forntend, name='forntend'),
    # path Login/Logout
    path('login', include('django.contrib.auth.urls')),

    # ======================
    # Backend Section
    path('backend', views.backend, name='backend'),
    #path to add patient
    path('add_patient', views.add_patient, name='add_patient'),
    #path to delete patient
    path('delete_patient/<str:patient_id>', views.delete_patient, name='delete_patient'),
    #path to access patient individually
    path('patient/<str:patient_id>', views.patient, name='patient'),
    #path to edit patient
    path('edit_patient', views.edit_patient, name='edit_patient'),
    #Support
    path('support', views.support, name='support'),

]