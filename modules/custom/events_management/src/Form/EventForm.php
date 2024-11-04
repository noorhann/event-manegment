<?php

namespace Drupal\events_management\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Datetime\DrupalDateTime;

/**
 * Form controller for the Event entity edit forms.
 */
class EventForm extends ContentEntityForm
{

    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $form = parent::buildForm($form, $form_state);
        return $form;
    }

    public function validateForm(array &$form, FormStateInterface $form_state)
    {
        parent::validateForm($form, $form_state);

        $start_time = $form_state->getValue('start_time');
        $end_time = $form_state->getValue('end_time');

        if ($start_time && $end_time) {
            $start_time_obj = new DrupalDateTime($start_time);
            $end_time_obj = new DrupalDateTime($end_time);

            if ($end_time_obj < $start_time_obj) {
                $form_state->setErrorByName('end_time', $this->t('The end date must not be earlier than the start date.'));
            }
        }
    }

    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        $entity = $this->getEntity();
        $entity->save();
        $this->messenger()->addStatus($this->t('The event %title has been saved.', ['%title' => $entity->label()]));
        $form_state->setRedirect('entity.event.canonical', ['event' => $entity->id()]);
    }
}
