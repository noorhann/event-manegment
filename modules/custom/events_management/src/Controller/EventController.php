<?php

namespace Drupal\events_management\Controller;

use Drupal\Core\Controller\ControllerBase;

class EventController extends ControllerBase
{
    /**
     * Create Event page logic.
     */
    public function createEvent()
    {
        $form = \Drupal::formBuilder()->getForm('Drupal\event_management\Form\EventForm');
        return $form;
    }

    /**
     * List Events page logic.
     */
    public function listEvents()
    {
        $query = \Drupal::entityQuery('event')
        ->condition('status', 1)
            ->sort('start_time', 'ASC');
        $event_ids = $query->execute();

        if (empty($event_ids)) {
            return [
                '#markup' => $this->t('No events found.'),
            ];
        }

        $events = \Drupal::entityTypeManager()->getStorage('event')->loadMultiple($event_ids);
        $rendered_events = [];

        foreach ($events as $event) {
            $rendered_events[] = [
                '#theme' => 'item_list',
                '#items' => [
                    Link::fromTextAndUrl($event->label(), $event->toUrl())->toString(),
                    '<p>' . $this->t('Start: @start', ['@start' => $event->get('start_time')->value]) . '</p>',
                    '<p>' . $this->t('End: @end', ['@end' => $event->get('end_time')->value]) . '</p>',
                ],
                '#attributes' => ['class' => ['event-item']],
            ];
        }

        return [
            '#theme' => 'item_list',
            '#items' => $rendered_events,
            '#title' => $this->t('Event List'),
        ];
    }

    /**
     * View Event page logic.
     */
    public function viewEvent($event)
    {
        // Load the event entity.
        $event_entity = \Drupal::entityTypeManager()->getStorage('event')->load($event);

        if (!$event_entity) {
            throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException();
        }

        return [
            '#theme' => 'event_detail',
            '#event' => [
                'title' => $event_entity->label(),
                'description' => $event_entity->get('description')->value,
                'start_time' => $event_entity->get('start_time')->value,
                'end_time' => $event_entity->get('end_time')->value,
                'image' => $event_entity->get('image')->view(['label' => 'hidden']),
            ],
            '#title' => $event_entity->label(),
        ];
    }
}
